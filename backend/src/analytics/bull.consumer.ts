import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import { ClickHouseService } from '../clickhouse/clickhouse.service';
import { AnalyticsGateway } from './analytics.gateway';

@Processor('tracker-events')
@Injectable()
export class BullConsumerService extends WorkerHost implements OnModuleDestroy {
  private readonly logger = new Logger(BullConsumerService.name);
  
  // Buffers for batch insertion to ClickHouse
  private clickBuffer: any[] = [];
  private conversionBuffer: any[] = [];
  private readonly BATCH_SIZE = 1000;
  private readonly FLUSH_INTERVAL_MS = 2000;
  private flushInterval: NodeJS.Timeout;

  constructor(
    private clickHouseService: ClickHouseService,
    private gateway: AnalyticsGateway
  ) {
    super();
    this.flushInterval = setInterval(() => this.flushBuffers(), this.FLUSH_INTERVAL_MS);
  }

  async process(job: Job<any, any, string>): Promise<any> {
    const event = job.data;
    const crypto = require('crypto');
    
    // Broadcast to real-time UI
    this.gateway.broadcastEvent(event);

    if (event.type === 'click') {
      this.clickBuffer.push({
        click_id: event.click_id || crypto.randomUUID(),
        timestamp: event.timestamp.replace('T', ' ').substring(0, 19), 
        campaign_id: event.camp_id || '',
        workspace_id: event.workspace_id || '',
        offer_id: event.offer_id || '',
        traffic_source_id: event.ts_id || '',
        ip: event.ip || '',
        user_agent: event.userAgent || '',
        geo_country: '',
        device_type: '',
        cost: parseFloat(event.cost) || 0,
        is_bot: 0
      });
    } else if (event.type === 'conversion') {
      this.conversionBuffer.push({
        conversion_id: crypto.randomUUID(),
        click_id: event.click_id || crypto.randomUUID(),
        timestamp: event.timestamp.replace('T', ' ').substring(0, 19),
        campaign_id: event.camp_id || '',
        workspace_id: event.workspace_id || '',
        offer_id: event.offer_id || '',
        payout: parseFloat(event.payout) || 0,
        transaction_id: event.txid || ''
      });
    }

    if (this.clickBuffer.length >= this.BATCH_SIZE || this.conversionBuffer.length >= this.BATCH_SIZE) {
      await this.flushBuffers();
    }
    
    return {};
  }

  private async flushBuffers() {
    if (this.clickBuffer.length > 0) {
      const clicks = [...this.clickBuffer];
      this.clickBuffer = [];
      try {
        await this.clickHouseService.batchInsert('clicks', clicks);
        this.logger.log(`Inserted ${clicks.length} clicks to ClickHouse`);
      } catch (err) {
        this.logger.error('ClickHouse insert failed for clicks', err);
      }
    }

    if (this.conversionBuffer.length > 0) {
      const conversions = [...this.conversionBuffer];
      this.conversionBuffer = [];
      try {
        await this.clickHouseService.batchInsert('conversions', conversions);
        this.logger.log(`Inserted ${conversions.length} conversions to ClickHouse`);
      } catch (err) {
        this.logger.error('ClickHouse insert failed for conversions', err);
      }
    }
  }

  async onModuleDestroy() {
    clearInterval(this.flushInterval);
    await this.flushBuffers();
  }
}

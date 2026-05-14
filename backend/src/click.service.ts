import { Injectable, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { SmartRouterService } from './redirect/smart-router.service';

@Injectable()
export class ClickService {
  private readonly logger = new Logger(ClickService.name);

  constructor(
    @InjectQueue('tracker-events') private readonly eventQueue: Queue,
    private readonly smartRouter: SmartRouterService
  ) {}

  async processClick(query: any, ip: string, userAgent: string): Promise<string> {
    const clickEvent = {
      type: 'click',
      timestamp: new Date().toISOString(),
      ip,
      userAgent,
      ...query,
    };
    
    // Add event to BullMQ queue for async processing
    await this.eventQueue.add('process-click', clickEvent, {
      removeOnComplete: true, // Keep Redis clean
      removeOnFail: 1000 // Keep last 1000 failed jobs
    });
    
    // Resolve dynamic routing via Redis layer (Geo/Device/A-B Split)
    const campaignId = query.camp_id || 'default';
    const geo = 'US'; // Example: In production, use MaxMind GeoIP lookup on the `ip`
    const device = userAgent || 'desktop';
    
    return await this.smartRouter.getRoutingDestination(campaignId, geo, device);
  }

  async processConversion(query: any): Promise<void> {
    const txid = query.txid;
    
    if (txid) {
      const isUnique = await this.smartRouter.deduplicateConversion(txid);
      if (!isUnique) {
        this.logger.warn(`Duplicate conversion blocked for txid: ${txid}`);
        return; // Drop duplicate
      }
    }

    const conversionEvent = {
      type: 'conversion',
      timestamp: new Date().toISOString(),
      ...query,
    };
    
    // Add conversion event to BullMQ queue
    await this.eventQueue.add('process-conversion', conversionEvent, {
      removeOnComplete: true,
      removeOnFail: 1000
    });
  }
}

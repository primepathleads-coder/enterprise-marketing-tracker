import { Module } from '@nestjs/common';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';
import { BullConsumerService } from './bull.consumer';
import { ClickHouseService } from '../clickhouse/clickhouse.service';
import { AnalyticsGateway } from './analytics.gateway';

@Module({
  controllers: [AnalyticsController],
  providers: [AnalyticsService, BullConsumerService, ClickHouseService, AnalyticsGateway],
})
export class AnalyticsModule {}

import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { SmartRouterService } from './smart-router.service';

@Module({
  providers: [RedisService, SmartRouterService],
  exports: [SmartRouterService, RedisService],
})
export class RedirectModule {}

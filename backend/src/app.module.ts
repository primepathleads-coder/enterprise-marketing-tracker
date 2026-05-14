import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClickController } from './click.controller';
import { ClickService } from './click.service';
import { CampaignModule } from './campaign/campaign.module';
import { PrismaService } from './prisma.service';
import { RedirectModule } from './redirect/redirect.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 100, // Limit 100 requests per minute per IP globally
    }]),
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379', 10),
      },
    }),
    BullModule.registerQueue({
      name: 'tracker-events',
    }),
    CampaignModule,
    RedirectModule,
    AnalyticsModule,
  ],
  controllers: [AppController, ClickController],
  providers: [
    AppService, 
    ClickService, 
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard, // Apply global rate limiting
    }
  ],
})
export class AppModule {}

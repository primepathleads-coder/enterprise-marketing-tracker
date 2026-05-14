import { Controller, Get, Query, UseGuards, Req } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';
import type { Request } from 'express';

@Controller('api/analytics')
@UseGuards(RolesGuard)
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('campaigns')
  @Roles(Role.AGENCY_OWNER, Role.MANAGER, Role.ANALYST, Role.MEDIA_BUYER)
  async getCampaignStats(@Req() req: Request) {
    // Extract workspace securely from header/token, not from query param (to prevent tenant hopping)
    const workspaceId = req.headers['x-workspace-id'] as string;
    return this.analyticsService.getCampaignStats(workspaceId || 'default');
  }

  @Get('timeseries')
  @Roles(Role.AGENCY_OWNER, Role.MANAGER, Role.ANALYST, Role.MEDIA_BUYER, Role.CLIENT)
  async getTimeSeries(@Req() req: Request) {
    const workspaceId = req.headers['x-workspace-id'] as string;
    return this.analyticsService.getTimeSeriesData(workspaceId || 'default');
  }
}

import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { CampaignService } from './campaign.service';

@Controller('api/campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()
  create(@Body() data: any) {
    return this.campaignService.createCampaign(data);
  }

  @Get()
  findAll(@Query('workspaceId') workspaceId: string) {
    return this.campaignService.getCampaigns(workspaceId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campaignService.getCampaign(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.campaignService.updateCampaign(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campaignService.deleteCampaign(id);
  }
}

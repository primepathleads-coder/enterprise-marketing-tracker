import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CampaignService {
  constructor(private prisma: PrismaService) {}

  async createCampaign(data: any) {
    return this.prisma.campaign.create({ data });
  }

  async getCampaigns(workspaceId: string) {
    if (!workspaceId) {
      return this.prisma.campaign.findMany({
        include: { offer: true, trafficSource: true }
      });
    }
    return this.prisma.campaign.findMany({
      where: { workspaceId },
      include: { offer: true, trafficSource: true }
    });
  }

  async getCampaign(id: string) {
    return this.prisma.campaign.findUnique({ 
      where: { id },
      include: { offer: true, trafficSource: true }
    });
  }

  async updateCampaign(id: string, data: any) {
    return this.prisma.campaign.update({ where: { id }, data });
  }

  async deleteCampaign(id: string) {
    return this.prisma.campaign.delete({ where: { id } });
  }
}

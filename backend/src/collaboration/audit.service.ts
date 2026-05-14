import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuditService {
  constructor(private prisma: PrismaService) {}

  /**
   * Logs a significant action to the workspace audit trail.
   */
  async logAction(
    workspaceId: string,
    userId: string | null,
    action: string,
    entityType: string,
    entityId?: string,
    metadata?: any,
    ipAddress?: string,
  ) {
    try {
      await this.prisma.auditLog.create({
        data: {
          workspaceId,
          userId,
          action,
          entityType,
          entityId,
          metadata: metadata ? JSON.stringify(metadata) : null,
          ipAddress,
        }
      });
    } catch (e) {
      console.error('Failed to write audit log', e);
    }
  }
}

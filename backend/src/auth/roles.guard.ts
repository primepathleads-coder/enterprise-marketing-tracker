import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client';
import { ROLES_KEY } from './roles.decorator';
import { PrismaService } from '../prisma.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    
    if (!requiredRoles) {
      return true; // No specific role required, allow access
    }
    
    const request = context.switchToHttp().getRequest();
    // In a real implementation, user would be populated by a JWT AuthGuard running before this
    const user = request.user;
    const workspaceId = request.headers['x-workspace-id'];

    if (!user || !workspaceId) {
      throw new ForbiddenException('User or Workspace context missing');
    }

    // Verify user role in this specific workspace
    const workspaceUser = await this.prisma.workspaceUser.findUnique({
      where: {
        userId_workspaceId: {
          userId: user.id,
          workspaceId: workspaceId as string
        }
      }
    });

    if (!workspaceUser) {
      throw new ForbiddenException('User does not belong to this workspace');
    }

    // SUPER_ADMIN overrides all
    if (workspaceUser.role === Role.SUPER_ADMIN) {
      return true;
    }

    const hasRole = requiredRoles.some((role) => workspaceUser.role === role);
    
    if (!hasRole) {
      throw new ForbiddenException('Insufficient permissions for this action');
    }

    return true;
  }
}

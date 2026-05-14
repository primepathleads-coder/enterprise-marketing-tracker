import { Controller, Get, Post, Req, Res, Query, Body } from '@nestjs/common';
import { ClickService } from './click.service';
import { Request, Response } from 'express';

@Controller('tracking')
export class ClickController {
  constructor(private readonly clickService: ClickService) {}

  @Get('click')
  async handleClick(@Req() req: Request, @Res() res: Response, @Query() query: any) {
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    const userAgent = req.headers['user-agent'] || '';
    
    // Process the click and get redirect URL
    const redirectUrl = await this.clickService.processClick(query, ip as string, userAgent);
    
    // Fast 302 redirect
    return res.redirect(302, redirectUrl);
  }

  @Get('postback')
  async handlePostback(@Query() query: any) {
    // Process conversion (S2S postback)
    await this.clickService.processConversion(query);
    return { success: true };
  }
}

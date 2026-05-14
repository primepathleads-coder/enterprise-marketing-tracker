import { Injectable, Logger } from '@nestjs/common';
import { RedisService } from '../redirect/redis.service';

@Injectable()
export class FraudScoringService {
  private readonly logger = new Logger(FraudScoringService.name);

  constructor(private redis: RedisService) {}

  /**
   * Scores an incoming click. If the score is too high, it might be a bot or proxy.
   * Basic foundation: Fast IP velocity check using Redis.
   */
  async analyzeClickVelocity(ip: string, campaignId: string): Promise<boolean> {
    const key = `fraud:ip_velocity:${campaignId}:${ip}`;
    
    try {
      const currentCount = await this.redis.client.incr(key);
      if (currentCount === 1) {
        await this.redis.client.expire(key, 60); // 60 seconds window
      }
      
      // If same IP clicks more than 5 times in 60 seconds on the same campaign, flag it
      if (currentCount > 5) {
        this.logger.warn(`High click velocity detected for IP ${ip} on campaign ${campaignId}. Flagged as suspicious.`);
        return true; // Is Suspicious
      }
      
      return false;
    } catch (e) {
      return false; // Fail open
    }
  }

  /**
   * Evaluates User-Agent for known bot signatures.
   */
  isKnownBot(userAgent: string): boolean {
    const botSignatures = ['googlebot', 'bingbot', 'yandexbot', 'ahrefsbot', 'semrushbot', 'headless', 'puppeteer', 'phantomjs'];
    const uaLower = userAgent.toLowerCase();
    return botSignatures.some(sig => uaLower.includes(sig));
  }
}

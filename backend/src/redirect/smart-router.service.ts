import { Injectable } from '@nestjs/common';
import { RedisService } from './redis.service';

@Injectable()
export class SmartRouterService {
  constructor(private redis: RedisService) {}

  async getRoutingDestination(campaignId: string, geo: string, device: string): Promise<string> {
    const cacheKey = `route:${campaignId}:${geo}:${device}`;
    const cachedRoute = await this.redis.cacheGet(cacheKey);
    
    if (cachedRoute) {
      return cachedRoute;
    }

    // In a full production scenario, this queries the DB for Campaign paths, rules, and offers.
    // It evaluates weights (e.g. 50% Offer A, 50% Offer B) and returns the winning URL.
    
    // For this rapid execution iteration, we simulate smart routing based on device context.
    const isMobile = device.toLowerCase().includes('mobi') || device.toLowerCase().includes('android');
    const baseOfferUrl = isMobile ? 'https://mobile-optimized-offer.com/' : 'https://desktop-offer.com/';
    const finalUrl = `${baseOfferUrl}?subid=${campaignId}&geo=${geo}`;
    
    // Cache the resolved route for 5 minutes. 
    // This allows the tracking controller to achieve sub-millisecond route resolution.
    await this.redis.cacheSet(cacheKey, finalUrl, 300);
    
    return finalUrl;
  }

  /**
   * Prevents duplicate postbacks for the same transaction ID.
   * Keeps track for 30 days.
   */
  async deduplicateConversion(transactionId: string): Promise<boolean> {
    if (!transactionId) return true; // Can't dedupe without txid, allow through by default or block depending on strictness
    
    try {
      const isNew = await this.redis.client.setnx(`txid:${transactionId}`, '1');
      if (isNew === 1) {
        await this.redis.client.expire(`txid:${transactionId}`, 86400 * 30); // 30 days
        return true; // Valid new conversion
      }
      return false; // Duplicate
    } catch (e) {
      // In case of Redis failure, we fallback to allowing it to prevent data loss.
      return true;
    }
  }
}

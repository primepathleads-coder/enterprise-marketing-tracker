import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  public client: Redis;

  constructor() {
    this.client = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');
  }

  async onModuleInit() {
    // Test connection
    try {
      await this.client.ping();
    } catch (e) {
      console.warn("Redis not running locally, operating in fallback mode.");
    }
  }

  async onModuleDestroy() {
    try {
      await this.client.quit();
    } catch(e) {}
  }

  async cacheGet(key: string): Promise<string | null> {
    try {
      return await this.client.get(key);
    } catch (e) { return null; }
  }

  async cacheSet(key: string, value: string, ttlSeconds = 3600): Promise<void> {
    try {
      await this.client.set(key, value, 'EX', ttlSeconds);
    } catch (e) {}
  }
}

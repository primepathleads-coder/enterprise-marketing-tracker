import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient } from '@clickhouse/client';

@Injectable()
export class ClickHouseService implements OnModuleInit {
  public client;

  constructor() {
    this.client = createClient({
      host: process.env.CLICKHOUSE_HOST || 'http://localhost:8123',
      username: process.env.CLICKHOUSE_USER || 'default',
      password: process.env.CLICKHOUSE_PASSWORD || '',
      database: process.env.CLICKHOUSE_DB || 'default',
    });
  }

  async onModuleInit() {
    await this.initializeSchemas();
  }

  private async initializeSchemas() {
    // We create the database if it doesn't exist
    await this.client.exec({ query: `CREATE DATABASE IF NOT EXISTS ${process.env.CLICKHOUSE_DB || 'tracker_analytics'}` });

    // Clicks Table: Optimized for fast ingestion and querying by time and campaign
    await this.client.exec({
      query: `
        CREATE TABLE IF NOT EXISTS clicks (
          click_id UUID,
          timestamp DateTime,
          campaign_id String,
          workspace_id String,
          offer_id String,
          traffic_source_id String,
          ip String,
          user_agent String,
          geo_country String,
          device_type String,
          cost Float32,
          is_bot UInt8 DEFAULT 0
        ) ENGINE = MergeTree()
        PARTITION BY toYYYYMM(timestamp)
        ORDER BY (workspace_id, campaign_id, timestamp)
      `
    });

    // Conversions Table
    await this.client.exec({
      query: `
        CREATE TABLE IF NOT EXISTS conversions (
          conversion_id UUID,
          click_id UUID,
          timestamp DateTime,
          campaign_id String,
          workspace_id String,
          offer_id String,
          payout Float32,
          transaction_id String
        ) ENGINE = MergeTree()
        PARTITION BY toYYYYMM(timestamp)
        ORDER BY (workspace_id, campaign_id, timestamp)
      `
    });
  }

  async batchInsert(tableName: string, values: any[]) {
    if (values.length === 0) return;
    await this.client.insert({
      table: tableName,
      values: values,
      format: 'JSONEachRow',
    });
  }
}

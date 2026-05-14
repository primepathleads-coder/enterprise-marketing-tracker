import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AnalyticsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AnalyticsGateway');

  afterInit(server: Server) {
    this.logger.log('WebSocket Gateway Initialized');
    
    // Simulate real-time stream of clicks/conversions for the dashboard
    setInterval(() => {
      const types = ['click', 'conversion'];
      const type = types[Math.floor(Math.random() * types.length)];
      
      const payload = {
        type,
        campaign_id: 'camp_' + Math.floor(Math.random() * 5),
        revenue: type === 'conversion' ? Math.floor(Math.random() * 50) + 10 : 0,
        timestamp: new Date().toISOString(),
      };
      
      this.server.emit('liveFeed', payload);
    }, 2000);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  // This method would be called by the KafkaConsumerService whenever new events are flushed
  broadcastEvent(event: any) {
    this.server.emit('liveFeed', event);
  }
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Security Hardening: Apply HTTP security headers
  app.use(helmet());
  
  app.enableCors({
    origin: '*', // To be restricted to allowed domains in production
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization, x-workspace-id',
  });
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

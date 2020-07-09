import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const kafka = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'test',
          brokers: []
        },
        consumer: {
          groupId: 'test-consumer'
        }
      }
    }
  );
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => console.log('Microservices listening HTTP in 3000'));
  await kafka.listen(() => console.log('Microservice is listening'));
}
bootstrap();

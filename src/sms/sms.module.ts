import { Module } from '@nestjs/common';
import { SmsController } from './sms.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'HELLO_SERVICE', transport: Transport.KAFKA, options: {
        client: {
          clientId: 'test',
          brokers: []
        },
        consumer: {
          groupId: 'test-consumer'
        }
      }}
    ])
  ],
  controllers: [SmsController]
})
export class SmsModule {}

import { Controller, Get, Inject } from '@nestjs/common';
import { EventPattern, Client, Transport, ClientKafka } from '@nestjs/microservices';

@Controller('sms')
export class SmsController {
  
  constructor(@Inject('HELLO_SERVICE') private readonly client: ClientKafka) {}

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  @EventPattern('send_sms')
  async handleSendSMS(data: Record<string, unknown>) {
    console.log(data);
  }
  
  @Get('/test')
  async sendSMS(): Promise<any> {
    const payload = [1, 2, 3];
    const a = await this.client.emit<number>('send_sms', payload);
    return a
  }

}

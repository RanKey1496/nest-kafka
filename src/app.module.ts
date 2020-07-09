import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { SmsModule } from './sms/sms.module';

@Module({
  imports: [CoursesModule, SmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

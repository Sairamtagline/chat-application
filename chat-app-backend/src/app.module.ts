import { Module } from '@nestjs/common';
import { AppController } from './modules/test/app.controller';
import { AppService } from './modules/test/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

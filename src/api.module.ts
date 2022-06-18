import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService as ApiService } from './api.service';

@Module({
  imports: [],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}

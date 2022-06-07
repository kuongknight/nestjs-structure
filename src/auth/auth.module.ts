import { Module } from '@nestjs/common';
import { AuthController } from './auth.dto';

@Module({
  controllers: [AuthController],
  providers: [],
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserConroller } from './user.controller';

@Module({
  providers: [UserService],
  controllers: [UserConroller],
})
export class UserModule {}

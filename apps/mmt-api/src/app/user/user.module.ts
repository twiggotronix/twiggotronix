import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([User])]
})
export class UserModule {}

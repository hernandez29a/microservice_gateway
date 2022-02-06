import { Module } from '@nestjs/common';
import { ProxiModule } from 'src/common/proxy/proxy.module';
import { UserController } from './user.controller';

@Module({
  imports:[ProxiModule],
  controllers: [UserController],
  providers: []
})
export class UserModule {}

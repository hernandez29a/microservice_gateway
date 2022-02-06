import { Module } from '@nestjs/common';
import { ProxiModule } from 'src/common/proxy/proxy.module';
import { PassengerController } from './passenger.controller';
import { PassengerService } from './passenger.service';

@Module({
  imports:[ProxiModule],
  controllers: [PassengerController],
  providers: [PassengerService]
})
export class PassengerModule {}

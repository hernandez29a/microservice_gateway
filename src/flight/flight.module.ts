import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { ProxiModule } from '../common/proxy/proxy.module';

@Module({
  imports:[ProxiModule],
  controllers: [FlightController]
})
export class FlightModule {}

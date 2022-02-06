import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ClientProxySuperFlights } from '../common/proxy/client.proxy';
import { PassengerDTO } from './dto/passenger.dto';
import { Observable } from 'rxjs';
import { IPassenger } from '../common/interfaces/passenger.interface';
import { PassengerMSG } from '../common/constanstst';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('passengers')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/passenger')
export class PassengerController {

    constructor( private readonly clientProxy: ClientProxySuperFlights){}
    private _clientProxyPassenger = this.clientProxy.clientProxyPassengers();

    @Post()
    create( @Body() passengerDTO: PassengerDTO ): Observable<IPassenger>{
        return this._clientProxyPassenger.send( PassengerMSG.CREATE, passengerDTO);
    }

    @Get()
    findAll():Observable<IPassenger[]>{
        return this._clientProxyPassenger.send(PassengerMSG.FIND_ALL, '');
    }

    @Get(':id')
    findOne( @Param('id') id: string ): Observable<IPassenger>{
        return this._clientProxyPassenger.send(PassengerMSG.FIND_ONE, id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() passangerDTO: PassengerDTO ): Observable<IPassenger>{
        return this._clientProxyPassenger.send(PassengerMSG.UPDATE, {id, passangerDTO});
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any>{
        return this._clientProxyPassenger.send(PassengerMSG.DELETE,id);
    }

}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiService as ApiService } from './api.service';
import { UsuarioClienteParams, UsuarioParams, ViajeParams } from './interfaces/create.interfaces';
import { Usuario, Viaje, UsuarioCliente, Vehiculo, ViewViajes } from './interfaces/db-tables.interfaces';
import {} from '../dist/interfaces/db-tables.interfaces';

@Controller()
export class ApiController {
  constructor(private readonly appService: ApiService) {}

  @Get('/travels')
  getTravels(@Body() data: { idUsuario: number }): Promise<Viaje[]> {
    return this.appService.getViajes(data.idUsuario);
  }

  @Get('/view')
  getViewTravels(): Promise<ViewViajes[]> {
    return this.appService.getViewViajes();
  }

  @Get('/users')
  getUsers(): Promise<Usuario[]> {
    return this.appService.getUsuarios();
  }

  @Get('/clientusers')
  getClientUsers(): Promise<UsuarioCliente[]> {
    return this.appService.getUsuariosClientes();
  }

  @Get('/vehicles')
  getVehicles(): Promise<Vehiculo[]> {
    return this.appService.getVehiculos();
  }

  @Post('/travels')
  createTravel(@Body() data: ViajeParams): Promise<void> {
    return this.appService.crearViaje(data);
  }

  @Post('/users')
  createUser(@Body() data: UsuarioParams): Promise<void> {
    return this.appService.crearUsuario(data);
  }

  @Post('/clientusers')
  createClientUser(@Body() data: UsuarioClienteParams): Promise<void> {
    return this.appService.crearUsuarioCliente(data);
  }
}

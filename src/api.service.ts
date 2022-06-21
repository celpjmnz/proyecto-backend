import { Injectable } from '@nestjs/common';
import { Usuario, UsuarioCliente, Vehiculo, Viaje, ViewViajes } from './interfaces/db-tables.interfaces';

import { PrismaClient } from '@prisma/client';
import { UsuarioClienteParams, UsuarioParams, VehiculoParams, ViajeParams } from './interfaces/create.interfaces';
import * as bcrypt from 'bcrypt';
import {} from '../dist/interfaces/db-tables.interfaces';

@Injectable()
export class ApiService {
  prisma: PrismaClient;

  constructor() {
    try {
      this.prisma = new PrismaClient();
    } catch (error) {
      throw error;
    }
  }

  async getViajes(idUsuario: number): Promise<Viaje[]> {
    return await this.prisma.viajes.findMany({ where: { idUsuario } });
  }

  async getViewViajes(): Promise<ViewViajes[]> {
    return await this.prisma.viewViajes.findMany();
  }

  async getUsuarios(): Promise<Usuario[]> {
    return await this.prisma.usuarios.findMany();
  }

  async getUsuariosClientes(): Promise<UsuarioCliente[]> {
    return await this.prisma.usuariosCliente.findMany();
  }

  async getUsuarioCliente(idUsuarioCliente): Promise<UsuarioCliente[]> {
    return this.prisma.usuariosCliente.findMany({ where: { idUsuarioCliente: Number(idUsuarioCliente) } });
  }

  async getVehiculos(): Promise<Vehiculo[]> {
    return this.prisma.vehiculos.findMany();
  }

  async crearViaje(data: ViajeParams): Promise<void> {
    await this.prisma.viajes.create({
      data: {
        fecha: data.fecha,
        idCliente: data.idCliente,
        idTipoVehiculo: data.idTipoVehiculo,
        idUsuario: data.idUsuario,
        destino: data.destino,
      },
    });
  }

  async crearUsuario(data: UsuarioParams): Promise<void> {
    const password = await bcrypt.hash(data.password, 10);

    await this.prisma.usuarios.create({
      data: { nombre: data.nombre, password },
    });
  }

  async crearVehiculo(data: VehiculoParams): Promise<void> {
    await this.prisma.vehiculos.create({
      data: { tipoVehiculo: data.tipoVehiculo },
    });
  }

  async crearUsuarioCliente(data: UsuarioClienteParams): Promise<void> {
    const password = await bcrypt.hash(data.password, 10);
    await this.prisma.usuariosCliente.create({
      data: { nombreUsuarioCliente: data.nombreUsuarioCliente, password },
    });
  }

  async deleteViajes(id): Promise<void> {
    console.log(id);
    await this.prisma.viajes.delete({ where: { id: Number(id) } });
  }

  async deleteVehiculos(idTipoVehiculo): Promise<void> {
    console.log(idTipoVehiculo);
    await this.prisma.vehiculos.delete({ where: { idTipoVehiculo: Number(idTipoVehiculo) } });
  }
}

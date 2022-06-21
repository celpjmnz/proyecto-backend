import { Usuario, UsuarioCliente, Vehiculo, Viaje, ViewViajes } from './interfaces/db-tables.interfaces';
import { PrismaClient } from '@prisma/client';
import { UsuarioClienteParams, UsuarioParams, VehiculoParams, ViajeParams } from './interfaces/create.interfaces';
export declare class ApiService {
    prisma: PrismaClient;
    constructor();
    getViajes(idUsuario: number): Promise<Viaje[]>;
    getViewViajes(): Promise<ViewViajes[]>;
    getUsuarios(): Promise<Usuario[]>;
    getUsuariosClientes(): Promise<UsuarioCliente[]>;
    getUsuarioCliente(idUsuarioCliente: any): Promise<UsuarioCliente[]>;
    getVehiculos(): Promise<Vehiculo[]>;
    crearViaje(data: ViajeParams): Promise<void>;
    crearUsuario(data: UsuarioParams): Promise<void>;
    crearVehiculo(data: VehiculoParams): Promise<void>;
    crearUsuarioCliente(data: UsuarioClienteParams): Promise<void>;
    deleteViajes(id: any): Promise<void>;
    deleteVehiculos(idTipoVehiculo: any): Promise<void>;
}

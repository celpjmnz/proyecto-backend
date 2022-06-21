import { ApiService as ApiService } from './api.service';
import { UsuarioClienteParams, UsuarioParams, VehiculoParams, ViajeParams } from './interfaces/create.interfaces';
import { Usuario, Viaje, UsuarioCliente, Vehiculo, ViewViajes } from './interfaces/db-tables.interfaces';
export declare class ApiController {
    private readonly appService;
    constructor(appService: ApiService);
    getTravels(data: {
        idUsuario: number;
    }): Promise<Viaje[]>;
    getViewTravels(): Promise<ViewViajes[]>;
    getUsers(): Promise<Usuario[]>;
    loginUser(data: {
        nombre: string;
        password: string;
    }): Promise<boolean>;
    loginClientUser(data: {
        nombreUsuarioCliente: string;
        password: string;
    }): Promise<boolean>;
    getClientUser(idUsuarioCliente: any): Promise<UsuarioCliente[]>;
    getClientUsers(): Promise<UsuarioCliente[]>;
    getVehicles(): Promise<Vehiculo[]>;
    createTravel(data: ViajeParams): Promise<void>;
    createUser(data: UsuarioParams): Promise<void>;
    createVehicle(data: VehiculoParams): Promise<void>;
    createClientUser(data: UsuarioClienteParams): Promise<void>;
    deleteTravel(id: any): Promise<void>;
    deleteVehiculo(idTipoVehiculo: any): Promise<void>;
}

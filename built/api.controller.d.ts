import { ApiService as ApiService } from './api.service';
import { UsuarioClienteParams, UsuarioParams, ViajeParams } from './interfaces/create.interfaces';
import { Usuario, Viaje, UsuarioCliente, Vehiculo, ViewViajes } from './interfaces/db-tables.interfaces';
export declare class ApiController {
    private readonly appService;
    constructor(appService: ApiService);
    getTravels(data: {
        idUsuario: number;
    }): Promise<Viaje[]>;
    getViewTravels(): Promise<ViewViajes[]>;
    getUsers(): Promise<Usuario[]>;
    getClientUsers(): Promise<UsuarioCliente[]>;
    getVehicles(): Promise<Vehiculo[]>;
    createTravel(data: ViajeParams): Promise<void>;
    createUser(data: UsuarioParams): Promise<void>;
    createClientUser(data: UsuarioClienteParams): Promise<void>;
}

export interface Viaje {
  id: number;
  idCliente: number;
  fecha: Date;
  idTipoVehiculo: number;
  destino: string;
}

export interface ViewViajes {
  id: number;
  fecha: Date;
  idTipoVehiculo: number;
  idCliente: number;
  idUsuario: number;
  idConductor: number;
  idUsuarioCliente: number;
  cliente: string;
  idVehiculo: number;
  tipoVehiculo: string;
  destino: string;
}

export interface Usuario {
  id: number;
  nombre: string;
  password: string;
}

export interface UsuarioCliente {
  idUsuarioCliente: number;
  nombreUsuarioCliente: string;
  password: string;
}

export interface Vehiculo {
  idTipoVehiculo: number;
  tipoVehiculo: string;
}

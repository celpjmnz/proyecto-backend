export interface ViajeParams {
  idCliente: number;
  fecha: Date;
  idTipoVehiculo: number;
  idUsuario: number;
  destino: string;
}

export interface UsuarioParams {
  nombre: string;
  password: string;
}

export interface UsuarioClienteParams {
  nombreUsuarioCliente: string;
  password: string;
}

export interface VehiculoParams {
  tipoVehiculo: string;
}

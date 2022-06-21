"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
let ApiService = class ApiService {
    constructor() {
        try {
            this.prisma = new client_1.PrismaClient();
        }
        catch (error) {
            throw error;
        }
    }
    async getViajes(idUsuario) {
        return await this.prisma.viajes.findMany({ where: { idUsuario } });
    }
    async getViewViajes() {
        return await this.prisma.viewViajes.findMany();
    }
    async getUsuarios() {
        return await this.prisma.usuarios.findMany();
    }
    async checkUserLogin(data) {
        const user = await this.prisma.usuarios.findFirst({ where: { nombre: data.nombre } });
        return bcrypt.compare(data.password, user.password);
    }
    async checkClientUserLogin(data) {
        const user = await this.prisma.usuariosCliente.findFirst({
            where: { nombreUsuarioCliente: data.nombreUsuarioCliente },
        });
        return bcrypt.compare(data.password, user.password);
    }
    async getUsuariosClientes() {
        return await this.prisma.usuariosCliente.findMany();
    }
    async getUsuarioCliente(idUsuarioCliente) {
        return this.prisma.usuariosCliente.findMany({ where: { idUsuarioCliente: Number(idUsuarioCliente) } });
    }
    async getVehiculos() {
        return this.prisma.vehiculos.findMany();
    }
    async crearViaje(data) {
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
    async crearUsuario(data) {
        const password = await bcrypt.hash(data.password, 10);
        await this.prisma.usuarios.create({
            data: { nombre: data.nombre, password },
        });
    }
    async crearVehiculo(data) {
        await this.prisma.vehiculos.create({
            data: { tipoVehiculo: data.tipoVehiculo },
        });
    }
    async crearUsuarioCliente(data) {
        const password = await bcrypt.hash(data.password, 10);
        await this.prisma.usuariosCliente.create({
            data: { nombreUsuarioCliente: data.nombreUsuarioCliente, password },
        });
    }
    async deleteViajes(id) {
        console.log(id);
        await this.prisma.viajes.delete({ where: { id: Number(id) } });
    }
    async deleteVehiculos(idTipoVehiculo) {
        console.log(idTipoVehiculo);
        await this.prisma.vehiculos.delete({ where: { idTipoVehiculo: Number(idTipoVehiculo) } });
    }
};
ApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map
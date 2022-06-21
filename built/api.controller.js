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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiController = void 0;
const common_1 = require("@nestjs/common");
const api_service_1 = require("./api.service");
let ApiController = class ApiController {
    constructor(appService) {
        this.appService = appService;
    }
    getTravels(data) {
        return this.appService.getViajes(data.idUsuario);
    }
    getViewTravels() {
        return this.appService.getViewViajes();
    }
    getUsers() {
        return this.appService.getUsuarios();
    }
    getClientUser(idUsuarioCliente) {
        return this.appService.getUsuarioCliente(idUsuarioCliente);
    }
    getClientUsers() {
        return this.appService.getUsuariosClientes();
    }
    getVehicles() {
        return this.appService.getVehiculos();
    }
    createTravel(data) {
        return this.appService.crearViaje(data);
    }
    createUser(data) {
        return this.appService.crearUsuario(data);
    }
    createVehicle(data) {
        return this.appService.crearVehiculo(data);
    }
    createClientUser(data) {
        return this.appService.crearUsuarioCliente(data);
    }
    deleteTravel(id) {
        return this.appService.deleteViajes(id);
    }
    deleteVehiculo(idTipoVehiculo) {
        return this.appService.deleteVehiculos(idTipoVehiculo);
    }
};
__decorate([
    (0, common_1.Get)('/travels'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getTravels", null);
__decorate([
    (0, common_1.Get)('/view'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getViewTravels", null);
__decorate([
    (0, common_1.Get)('/users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('/clientusers/:idUsuarioCliente'),
    __param(0, (0, common_1.Param)('idUsuarioCliente')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getClientUser", null);
__decorate([
    (0, common_1.Get)('/clientusers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getClientUsers", null);
__decorate([
    (0, common_1.Get)('/vehicles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getVehicles", null);
__decorate([
    (0, common_1.Post)('/travels'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "createTravel", null);
__decorate([
    (0, common_1.Post)('/users'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('/vehicles'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "createVehicle", null);
__decorate([
    (0, common_1.Post)('/clientusers'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "createClientUser", null);
__decorate([
    (0, common_1.Delete)('/travels/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "deleteTravel", null);
__decorate([
    (0, common_1.Delete)('/vehicles/:idTipoVehiculo'),
    __param(0, (0, common_1.Param)('idTipoVehiculo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "deleteVehiculo", null);
ApiController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], ApiController);
exports.ApiController = ApiController;
//# sourceMappingURL=api.controller.js.map
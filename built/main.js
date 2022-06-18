"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const api_module_1 = require("./api.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(api_module_1.ApiModule);
    app.enableCors();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
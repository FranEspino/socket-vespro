"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var Server_1 = __importDefault(require("./server/Server"));
//establecer acceso a las variables de entorno
dotenv_1["default"].config();
var server = new Server_1["default"]();
server.listen();
//# sourceMappingURL=App.js.map
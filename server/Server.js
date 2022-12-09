"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var locationDriver = require('../socket/location_driver');
var Server = /** @class */ (function () {
    function Server() {
        this.apiPaths = {};
        this.app = (0, express_1["default"])();
        this.port = process.env.PORT || '9000';
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        this.middleware();
        this.socket();
    }
    Server.prototype.middleware = function () {
        this.app.use((0, cors_1["default"])({ origin: '*' }));
        this.app.use(express_1["default"].json());
        this.app.use(express_1["default"].static(path_1["default"].join(__dirname, "../public")));
        this.app.use(express_1["default"].static("public"));
    };
    Server.prototype.socket = function () {
        locationDriver(this.io);
        this.io.on('connection', function (socket) {
            locationDriver(socket);
        });
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.server.listen(this.port, function () {
            console.log('✓ The server Vespro api is runing in port: ' + _this.port);
        });
    };
    return Server;
}());
exports["default"] = Server;
//# sourceMappingURL=Server.js.map
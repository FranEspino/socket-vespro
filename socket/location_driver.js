"use strict";
module.exports = function (io) {
    var namespace = io.of('/location_driver');
    namespace.on('connection', function (socket) {
        console.log('a user connected');
        socket.on('position', function (data) {
            console.log(data);
            var j = JSON.parse(data);
            namespace.emit("position/".concat(j.id), { id: j.id, lat: j.lat, lng: j.lng });
        });
        socket.on('chat', function (data) {
            console.log(data);
            var j = JSON.parse(data);
            namespace.emit("chat/".concat(j.id), { id: j.id, message: j.message });
        });
        socket.on('disconnect', function () {
            console.log('user disconnected');
        });
    });
};
//# sourceMappingURL=location_driver.js.map
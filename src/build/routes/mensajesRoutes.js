"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mensajesController_1 = require("../controllers/mensajesController");
var MensajesRoutes = /** @class */ (function () {
    function MensajesRoutes() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    MensajesRoutes.prototype.config = function () {
        this.router.post('/create', mensajesController_1.mensajesController.create);
        this.router.put('/update/:id', mensajesController_1.mensajesController.update);
        this.router["delete"]('/delete/:id', mensajesController_1.mensajesController["delete"]);
        this.router.get('/', mensajesController_1.mensajesController.list);
        this.router.get('/:id', mensajesController_1.mensajesController.listOne);
    };
    return MensajesRoutes;
}());
var mensajesRoutes = new MensajesRoutes();
exports["default"] = mensajesRoutes.router;

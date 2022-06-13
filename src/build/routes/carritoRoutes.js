"use strict";
exports.__esModule = true;
var express_1 = require("express");
var carritoController_1 = require("../controllers/carritoController");
var CarritoRoutes = /** @class */ (function () {
    function CarritoRoutes() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    CarritoRoutes.prototype.config = function () {
        this.router.post('/create', carritoController_1.carritoController.create);
        this.router.put('/update/:id', carritoController_1.carritoController.update);
        this.router["delete"]('/delete/:id', carritoController_1.carritoController["delete"]);
        this.router.get('/:id', carritoController_1.carritoController.listOne);
    };
    return CarritoRoutes;
}());
var carritoRoutes = new CarritoRoutes();
exports["default"] = carritoRoutes.router;

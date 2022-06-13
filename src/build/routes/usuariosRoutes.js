"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usuariosController_1 = require("../controllers/usuariosController");
var UsuariosRoutes = /** @class */ (function () {
    function UsuariosRoutes() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    UsuariosRoutes.prototype.config = function () {
        this.router.post('/create', usuariosController_1.usuariosController.create);
        this.router.put('/update/:id', usuariosController_1.usuariosController.update);
        this.router["delete"]('/delete/:id', usuariosController_1.usuariosController["delete"]);
        this.router.get('/', usuariosController_1.usuariosController.list);
        this.router.get('/:id', usuariosController_1.usuariosController.listOne);
        this.router.post('/exists', usuariosController_1.usuariosController.exists);
    };
    return UsuariosRoutes;
}());
var usuariosRoutes = new UsuariosRoutes();
exports["default"] = usuariosRoutes.router;

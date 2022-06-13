"use strict";
exports.__esModule = true;
var express_1 = require("express");
var categoriasController_1 = require("../controllers/categoriasController");
var CategoríasRoutes = /** @class */ (function () {
    function CategoríasRoutes() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    CategoríasRoutes.prototype.config = function () {
        this.router.get('/', categoriasController_1.categoríasController.list);
        this.router.post('/create', categoriasController_1.categoríasController.create);
        this.router.put('/update/:id', categoriasController_1.categoríasController.update);
        this.router["delete"]('/delete/:id', categoriasController_1.categoríasController["delete"]);
        this.router.get('/:id', categoriasController_1.categoríasController.listOne);
    };
    return CategoríasRoutes;
}());
var categoríasRoutes = new CategoríasRoutes();
exports["default"] = categoríasRoutes.router;

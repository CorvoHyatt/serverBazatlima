"use strict";
exports.__esModule = true;
var express_1 = require("express");
var productosController_1 = require("../controllers/productosController");
var ProductosRoutes = /** @class */ (function () {
    function ProductosRoutes() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    ProductosRoutes.prototype.config = function () {
        this.router.post('/create', productosController_1.productosController.create);
        this.router.put('/update/:id', productosController_1.productosController.update);
        this.router["delete"]('/delete/:id', productosController_1.productosController["delete"]);
        this.router.get('/', productosController_1.productosController.list);
        this.router.get('/:id', productosController_1.productosController.listOne);
    };
    return ProductosRoutes;
}());
var productosRoutes = new ProductosRoutes();
exports["default"] = productosRoutes.router;

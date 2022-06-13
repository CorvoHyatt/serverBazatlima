"use strict";
exports.__esModule = true;
var express_1 = require("express");
var IndexRoutes = /** @class */ (function () {
    function IndexRoutes() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    IndexRoutes.prototype.config = function () {
        this.router.get('/', function (req, res) { return res.send('probando ruta'); });
    };
    return IndexRoutes;
}());
var indexRoutes = new IndexRoutes();
exports["default"] = indexRoutes.router;

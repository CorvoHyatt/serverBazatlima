"use strict";
exports.__esModule = true;
var express_1 = require("express");
var calificacionController_1 = require("../controllers/calificacionController");
var CalificaciónRoutes = /** @class */ (function () {
    function CalificaciónRoutes() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    CalificaciónRoutes.prototype.config = function () {
        this.router.post('/create/', calificacionController_1.calificaciónController.create);
        this.router.put('/update/:id', calificacionController_1.calificaciónController.update);
        this.router["delete"]('/delete/:id', calificacionController_1.calificaciónController["delete"]);
        this.router.get('/:id', calificacionController_1.calificaciónController.listOne);
        this.router.get('/average/:id', calificacionController_1.calificaciónController.average);
    };
    return CalificaciónRoutes;
}());
var calificaciónRoutes = new CalificaciónRoutes();
exports["default"] = calificaciónRoutes.router;

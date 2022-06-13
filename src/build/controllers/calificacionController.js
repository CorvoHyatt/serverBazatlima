"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.calificaciónController = void 0;
var database_1 = __importDefault(require("../database"));
var CalificaciónController = /** @class */ (function () {
    function CalificaciónController() {
    }
    CalificaciónController.prototype.listOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, respuesta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1["default"].query('SELECT Calificación.comentario,Usuarios.nombreUsuario FROM Calificación, Usuarios WHERE Calificación.idUsuarioCalificado = ? AND Calificación.idUsuarioCalificador = Usuarios.idUsuario', [id])];
                    case 1:
                        respuesta = _a.sent();
                        if (respuesta.length > 0) {
                            res.json(respuesta[0]);
                            return [2 /*return*/];
                        }
                        res.status(404).json({ 'mensaje': 'Calificación no encontrado' });
                        return [2 /*return*/];
                }
            });
        });
    };
    CalificaciónController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var respuesta, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1["default"].query("SELECT * FROM Calificaci\u00F3n WHERE idUsuarioCalificado = ".concat(req.body.idUsuarioCalificado, " AND idUsuarioCalificador = ").concat(req.body.idUsuarioCalificador))];
                    case 1:
                        respuesta = _a.sent();
                        if (!(respuesta.length < 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, database_1["default"].query("INSERT INTO Calificación set ?", [req.body])];
                    case 2:
                        resp = _a.sent();
                        res.json(resp);
                        return [2 /*return*/];
                    case 3:
                        res.json(-1);
                        return [2 /*return*/];
                }
            });
        });
    };
    CalificaciónController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        console.log(req.params);
                        return [4 /*yield*/, database_1["default"].query("UPDATE Calificación set ? WHERE idUsuarioCalificador = ? ", [req.body, id])];
                    case 1:
                        resp = _a.sent();
                        res.json(resp);
                        return [2 /*return*/];
                }
            });
        });
    };
    CalificaciónController.prototype["delete"] = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1["default"].query("DELETE FROM Calificaci\u00F3n WHERE idUsuarioCalificador = ".concat(id))];
                    case 1:
                        resp = _a.sent();
                        res.json(resp);
                        return [2 /*return*/];
                }
            });
        });
    };
    CalificaciónController.prototype.average = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1["default"].query("SELECT AVG(estrellas) as estrellasPromedio FROM Calificaci\u00F3n WHERE estrellas > -1 AND idUsuarioCalificado = ".concat(id))];
                    case 1:
                        resp = _a.sent();
                        res.json(resp);
                        return [2 /*return*/];
                }
            });
        });
    };
    return CalificaciónController;
}());
exports.calificaciónController = new CalificaciónController();

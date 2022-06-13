import { Request, Response } from 'express';
import pool from '../database';
class CarritoController {
    public async listOne(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT * FROM Carrito, Productos WHERE Carrito.idUsuario = ? AND Productos.idProducto = Carrito.idProducto', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta);
            return;
        }
        res.status(404).json({ 'mensaje': 'Carrito no encontrado' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO Carrito set ?", [req.body]);
        res.json(resp);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE Carrito set ? WHERE idProducto = ? ", [req.body, id]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM Carrito WHERE idProducto = ${id}`);
        res.json(resp);
    }
}
export const carritoController = new CarritoController();
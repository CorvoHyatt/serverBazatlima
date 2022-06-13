import { Request, Response } from 'express';
import pool from '../database';
class ProductosController {
    public async list(req: Request, res: Response): Promise<void> {
        const respuesta = await pool.query('SELECT * FROM Productos');
        let data = {"data":respuesta}
        res.json(data);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT * FROM Productos WHERE idProducto = ? ', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Productos no encontrado' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO Productos set ?", [req.body]);
        res.json(resp);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE Productos set ? WHERE idProducto = ? ", [req.body, id]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM Productos WHERE idProducto = ${id}`);
        res.json(resp);
    }
}
export const productosController = new ProductosController();
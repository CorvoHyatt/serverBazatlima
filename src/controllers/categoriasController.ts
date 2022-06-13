import { Request, Response } from 'express';
import pool from '../database';
class CategoríasController {
    public async list(req: Request, res: Response): Promise<void> {
        const respuesta = await pool.query('SELECT * FROM categorias');
        let data = {"data":respuesta}
        res.json(data);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT * FROM categorias WHERE idCategoria = ? ', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'categorias no encontrado' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO categorias set ?", [req.body]);
        res.json(resp);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE categorias set ? WHERE idCategoria = ? ", [req.body, id]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM categorias WHERE idCategoria = ${id}`);
        res.json(resp);
    }
}
export const categoríasController = new CategoríasController();
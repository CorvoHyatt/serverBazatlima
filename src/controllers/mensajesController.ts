import { Request, Response } from 'express';
import pool from '../database';
class MensajesController {
    public async list(req: Request, res: Response): Promise<void> {
        const respuesta = await pool.query('SELECT * FROM Mensajes');
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT * FROM Mensajes WHERE idMensaje = ? ', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Mensajes no encontrado' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO Mensajes set ?", [req.body]);
        res.json(resp);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE Mensajes set ? WHERE idMensaje = ? ", [req.body, id]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM Mensajes WHERE idMensaje = ${id}`);
        res.json(resp);
    }
}
export const mensajesController = new MensajesController();
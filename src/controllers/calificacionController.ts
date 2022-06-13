import { Request, Response } from 'express';
import pool from '../database';
class CalificaciónController {
    public async listOne(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT calificacion.comentario,Usuarios.nombreUsuario FROM calificacion, Usuarios WHERE calificacion.idUsuarioCalificado = ? AND calificacion.idUsuarioCalificador = Usuarios.idUsuario', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'calificacion no encontrado' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        const respuesta = await pool.query(`SELECT * FROM calificacion WHERE idUsuarioCalificado = ${req.body.idUsuarioCalificado} AND idUsuarioCalificador = ${req.body.idUsuarioCalificador}`);
        
        if (respuesta.length < 0) {
            const resp = await pool.query("INSERT INTO calificacion set ?", [req.body]);
            res.json(resp);
            return;
        }
        res.json(-1);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE calificacion set ? WHERE idUsuarioCalificador = ? ", [req.body, id]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM calificacion WHERE idUsuarioCalificador = ${id}`);
        res.json(resp);
    }

    public async average(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`SELECT AVG(estrellas) as estrellasPromedio FROM calificacion WHERE estrellas > -1 AND idUsuarioCalificado = ${id}`);
        res.json(resp);
    }
}
export const calificaciónController = new CalificaciónController();
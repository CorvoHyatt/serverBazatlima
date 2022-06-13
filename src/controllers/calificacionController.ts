import { Request, Response } from 'express';
import pool from '../database';
class CalificaciónController {
    public async listOne(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT Calificación.comentario,Usuarios.nombreUsuario FROM Calificación, Usuarios WHERE Calificación.idUsuarioCalificado = ? AND Calificación.idUsuarioCalificador = Usuarios.idUsuario', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Calificación no encontrado' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        const respuesta = await pool.query(`SELECT * FROM Calificación WHERE idUsuarioCalificado = ${req.body.idUsuarioCalificado} AND idUsuarioCalificador = ${req.body.idUsuarioCalificador}`);
        
        if (respuesta.length < 0) {
            const resp = await pool.query("INSERT INTO Calificación set ?", [req.body]);
            res.json(resp);
            return;
        }
        res.json(-1);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE Calificación set ? WHERE idUsuarioCalificador = ? ", [req.body, id]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM Calificación WHERE idUsuarioCalificador = ${id}`);
        res.json(resp);
    }

    public async average(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`SELECT AVG(estrellas) as estrellasPromedio FROM Calificación WHERE estrellas > -1 AND idUsuarioCalificado = ${id}`);
        res.json(resp);
    }
}
export const calificaciónController = new CalificaciónController();
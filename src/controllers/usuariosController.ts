import { Request, Response } from 'express';
import pool from '../database';
class UsuariosController {
    public async list(req: Request, res: Response): Promise<void> {
        const respuesta = await pool.query('SELECT * FROM Usuarios');
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT * FROM Usuarios WHERE idUsuario = ? ', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Usuarios no encontrado' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO Usuarios set ?", [req.body]);
        res.json(resp);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE Usuarios set ? WHERE idUsuario = ? ", [req.body, id]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM Usuarios WHERE idUsuario = ${id}`);
        res.json(resp);
    }
    public async exists(req: Request, res: Response): Promise<void> {
        const { correo, password } = req.body;
        const respuesta = await pool.query("SELECT * FROM Usuarios WHERE correo = '" + correo + "' AND password = '" + password + "'");
        if (respuesta.length > 0) {
            res.json(respuesta);
            return;
        }
        res.status(404).json({'mensaje':'Usuario no existente'});
    }
}
export const usuariosController = new UsuariosController();
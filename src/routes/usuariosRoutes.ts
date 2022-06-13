import { Router } from 'express';

import { usuariosController } from '../controllers/usuariosController';

class UsuariosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.post('/create',usuariosController.create);
        this.router.put('/update/:id',usuariosController.update);
        this.router.delete('/delete/:id',usuariosController.delete);
        this.router.get('/',usuariosController.list);
        this.router.get('/:id',usuariosController.listOne);
        this.router.post('/exists',usuariosController.exists);
    }
}
const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;
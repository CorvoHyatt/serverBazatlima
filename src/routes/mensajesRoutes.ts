import { Router } from 'express';

import { mensajesController } from '../controllers/mensajesController';

class MensajesRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.post('/create',mensajesController.create);
        this.router.put('/update/:id',mensajesController.update);
        this.router.delete('/delete/:id',mensajesController.delete);
        this.router.get('/',mensajesController.list);
        this.router.get('/:id',mensajesController.listOne);
    }
}
const mensajesRoutes = new MensajesRoutes();
export default mensajesRoutes.router;
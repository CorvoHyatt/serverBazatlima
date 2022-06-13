import { Router } from 'express';

import { carritoController } from '../controllers/carritoController';

class CarritoRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.post('/create',carritoController.create);
        this.router.put('/update/:id',carritoController.update);
        this.router.delete('/delete/:id',carritoController.delete);
        this.router.get('/:id',carritoController.listOne);
    }
}
const carritoRoutes = new CarritoRoutes();
export default carritoRoutes.router;
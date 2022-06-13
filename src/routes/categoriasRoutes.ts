import { Router } from 'express';

import { categoríasController } from '../controllers/categoriasController';

class CategoríasRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/',categoríasController.list);
        this.router.post('/create',categoríasController.create);
        this.router.put('/update/:id',categoríasController.update);
        this.router.delete('/delete/:id',categoríasController.delete);
        this.router.get('/:id',categoríasController.listOne);
    }
}
const categoríasRoutes = new CategoríasRoutes();
export default categoríasRoutes.router;
import { Router } from 'express';

import { calificaciónController } from '../controllers/calificacionController';

class CalificaciónRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.post('/create/',calificaciónController.create);
        this.router.put('/update/:id',calificaciónController.update);
        this.router.delete('/delete/:id',calificaciónController.delete);
        this.router.get('/:id',calificaciónController.listOne);
        this.router.get('/average/:id',calificaciónController.average);
    }
}
const calificaciónRoutes = new CalificaciónRoutes();
export default calificaciónRoutes.router;
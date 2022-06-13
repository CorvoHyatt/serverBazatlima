import express, { Application } from 'express'
import indexRoutes from './routes/indexRoutes'
import morgan from 'morgan'
import cors from 'cors'

import usuariosRoutes from './routes/usuariosRoutes';
import productosRoutes from './routes/productosRoutes';
import mensajesRoutes from './routes/mensajesRoutes';
import carritoRoutes from './routes/carritoRoutes';
import calificacionRoutes from './routes/calificacionRoutes';
import categoriasRoutes from './routes/categoriasRoutes';

class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
    routes(): void {
        this.app.use(indexRoutes);

        this.app.use('/api/usuarios',usuariosRoutes);
        this.app.use('/api/productos',productosRoutes);
        this.app.use('/api/mensajes',mensajesRoutes);
        this.app.use('/api/carrito',carritoRoutes);
        this.app.use('/api/calificacion',calificacionRoutes);
        this.app.use('/api/categorias',categoriasRoutes);
    }
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
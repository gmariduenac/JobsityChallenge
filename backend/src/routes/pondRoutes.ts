import {Router} from 'express';

import { pondController } from '../controllers/pondController'

class PondRoutes{
    public router:Router=Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/',pondController.list);
        this.router.get('/:id',pondController.getById);
        this.router.post('/', pondController.create);
        this.router.put('/:id',pondController.update);
        this.router.delete('/:id', pondController.delete);
        this.router.get('/related/:id',pondController.getByIdFarm);
    }
}

const pondRoutes = new PondRoutes();
export default pondRoutes.router;
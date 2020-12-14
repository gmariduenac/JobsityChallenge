import {Router} from 'express';

import { farmController } from '../controllers/farmController'

class FarmRoutes{
    public router:Router=Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/',farmController.list);
        this.router.get('/:id',farmController.getById);
        this.router.post('/', farmController.create);
        this.router.put('/:id',farmController.update);
        this.router.delete('/:id', farmController.delete);
    }
}

const farmRoutes = new FarmRoutes();
export default farmRoutes.router;
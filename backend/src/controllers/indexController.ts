import {Request, Response } from 'express';

class IndexController{
    public index (req: Request, res: Response) {
        //res.send('Hello')
        res.json({text:'API is /API/farms'})
    }
}

export const indexController = new IndexController();

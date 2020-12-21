import {Request, Response } from 'express';

import pool from '../database';

class FarmController{
    
    public async list (req: Request, res: Response): Promise<void> {
        //res.send('Farms')
        //pool.query('DESCRIBE farm');
        //res.json({text:'Listing farms'});
        const farms = await pool.query('select farm.id as id, farm.name as name, farm.description as description, farm.image as image, farm.created_at as created_at, coalesce(sum(pond.size),0) as size from farm left join pond on farm.id = pond.id_farm_fk group by farm.id, farm.name, farm.description, farm.image, farm.created_at', function (error, results, fields) {
            if (error) throw error;
            //console.log('The solution is: ', results);
            if (results.length>0){
                return res.json(results);
            }else{
                return res.status(404).json({text:'The are no farms created'});
            }
          });
     
    }

    public async getById (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const farms = await pool.query('select farm.id as id, farm.name as name, farm.description as description, farm.image as image, farm.created_at as created_at, coalesce(sum(pond.size),0) as size from farm left join pond on farm.id = pond.id_farm_fk  where farm.id=? group by farm.id, farm.name, farm.description, farm.image, farm.created_at', [id], function (error, results, fields) {
            if (error) throw error;
            //console.log('The solution is: ', results);
            if (results.length>0){
                return res.json(results[0]);
            }else{
                return res.status(404).json({text:'The farm does not exists'});
            }
          });
        //res.json({text:'Getting a farm: '+ req.params.id});
    }

    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        await pool.query('INSERT INTO farm set ?',[req.body],function (error, results, fields){
            //console.log(error)
            if (error) throw error;
            //console.log('The solution is: ', results);
            if (results['affectedRows']>0){
                return res.json({text:'The farm was created'});
            }else{
                return res.status(404).json({text:'The farm could not be created!'})
            }
          });
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const farms = await pool.query('DELETE FROM farm where id = ?', [id], function (error, results, fields) {
            if (error) throw error;
            //console.log('The solution is: ', results);
            //console.log('The solution is: ', error);
            //console.log('The solution is: ', fields);
            if (results['affectedRows']>0){
                return res.json({text:'The farm '+id+' was deleted'});
            }else{
                return res.status(404).json({text:'The farm does not exists'});
            }
          });
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params; 
        const farms = await pool.query('UPDATE farm SET ? where id = ?', [req.body, id], function (error, results, fields) {
            if (error) throw error;
            if (results['affectedRows']>0){
                return res.json({text:'The farm '+id+' was updated'});
            }else{
                return res.status(404).json({text:'The farm was not updated'});
            }
          });
    }

}

export const farmController = new FarmController();
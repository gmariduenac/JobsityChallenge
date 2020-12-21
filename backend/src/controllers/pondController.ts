import {Request, Response } from 'express';

import pool from '../database';

class PondController{
    
    public async list (req: Request, res: Response): Promise<void> {
        //res.send('Farms')
        //pool.query('DESCRIBE farm');
        //res.json({text:'Listing farms'});
        const farms = await pool.query('SELECT * FROM pond', function (error, results, fields) {
            //if (error) throw error;
            //console.log('The solution is: ', results);
            if (results.length>0){
                return res.json(results);
            }else{
                return res.status(500).json({text:'The are no ponds created'});
            }
          });
     
    }

    public async getById (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const ponds = await pool.query('SELECT * FROM pond where id = ?', [id], function (error, results, fields) {
            //if (error) throw error;
            //console.log('The solution is: ', results);
            if (results.length>0){
                return res.json(results[0]);
            }else{
                return res.status(500).json({text:'The pond does not exists'});
            }
          });
        //res.json({text:'Getting a farm: '+ req.params.id});
    }

    public async getByIdFarm (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const ponds = await pool.query('SELECT count(*) as numberOfPonds FROM pond where id_farm_fk = ?', [id], function (error, results, fields) {
            if (results.length>=0){
                //console.log(results[0]["numberOfPonds"]);
                return res.json(results[0]["numberOfPonds"]);
            }else{
                return res.status(500).json(null);
            }
          });
    }

    public async create (req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        await pool.query('INSERT INTO pond set ?',[req.body]);
        //res.json({text:'Creating a farm'});
        res.json({message:'Pond saved!'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const farms = await pool.query('DELETE FROM pond where id = ?', [id], function (error, results, fields) {
            if (error) throw error;
            //console.log('The solution is: ', results);
            //console.log('The solution is: ', error);
            //console.log('The solution is: ', fields);
            if (results['affectedRows']>0){
                return res.json({text:'The pond '+id+' was deleted'});
            }else{
                return res.status(404).json({text:'The pond does not exists'});
            }
          });
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params; 
        console.log(req.body)
        const farms = await pool.query('UPDATE pond SET ? where id = ?', [req.body, id], function (error, results, fields) {
            if (error) throw error;
            if (results['affectedRows']>0){
                return res.json({text:'The pond '+id+' was updated'});
            }else{
                return res.status(404).json({text:'The pond was not updated'});
            }
          });
    }

}

export const pondController = new PondController();
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Farm } from '../models/farm';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmsService {

  API_URI='http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getListFarms(){
    return this.http.get(`${this.API_URI}/farms`)
  }
  
  getFarm(id:string){
    return this.http.get(`${this.API_URI}/farms/${id}`);
  }

  saveFarm( farm: Farm){
    return this.http.post(`${this.API_URI}/farms`,farm);
  }

  deleteFarm(id:string){
    return this.http.delete(`${this.API_URI}/farms/${id}`);
  }

  updateFarm(id:number, updatedFarm: Farm): Observable<Farm> {
    return this.http.put(`${this.API_URI}/farms/${id}`,updatedFarm);
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pond } from '../models/pond';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PondsService {

  API_URI='http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getListPonds(){
    return this.http.get(`${this.API_URI}/ponds`)
  }
  
  getPond(id: string){
    return this.http.get(`${this.API_URI}/ponds/${id}`);
  }

  savePond( pond: Pond){
    return this.http.post(`${this.API_URI}/ponds`,pond);
  }

  deletePond(id:string){
    return this.http.delete(`${this.API_URI}/ponds/${id}`);
  }

  updatePond(id:number, updatedPond: Pond): Observable<Pond> {
    return this.http.put(`${this.API_URI}/ponds/${id}`,updatedPond);
  }

  getFarmsRelated(id:string){
    return this.http.get(`${this.API_URI}/ponds/related/${id}`);
  }
}

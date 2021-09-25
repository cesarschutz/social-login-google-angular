import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//const baseUrl = 'https://ilpi-backend.herokuapp.com/patients';
const baseUrl = 'https://run.mocky.io/v3/8cb8d1ed-3b74-4ff3-b586-73b4a89eb91b';

export interface PatientModel {
    id: string,
    registry: string,
    name: false,
    room: false,
    responsible: false
}

@Injectable({
    providedIn: 'root'
})
export class PatientService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(baseUrl).toPromise();
    }

    get(registry) {
        return this.http.get(`${baseUrl}/${registry}`);
    }
    /**
      create(data) {
        return this.http.post(baseUrl, data);
      }
    
      update(id, data) {
        return this.http.put(`${baseUrl}/${id}`, data);
      }
    
      delete(id) {
        return this.http.delete(`${baseUrl}/${id}`);
      }  
    */
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://ilpi-backend.herokuapp.com/patients';

export class PatientModel {
  id: string;
  registry: string;
  name: string;
  room: number;
  responsible: string
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

  update(data) {
    return this.http.put(baseUrl, data).toPromise();
  }

  delete(registry) {
    return this.http.delete(`${baseUrl}/${registry}`).toPromise();
  }

  create(data) {
    return this.http.post(baseUrl, data).toPromise();
  }
}
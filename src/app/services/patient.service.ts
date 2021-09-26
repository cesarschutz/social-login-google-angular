import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://ilpi-backend.herokuapp.com/patients';

export class VitalSign {
  id: string
  createdAt: string
  heartBeatsPerMinute: number
  breathsPerMinute: number
  bodyTemperature: number
  systolicPressure: number
  diastolicPressure: number
  bloodOxygen: number
  observation: string
}

export class PatientModel {
  id: string;
  registry: string;
  name: string;
  room: number;
  responsible: string
  vitalSigns: any
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl).toPromise();
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

  getVitalSigns(patientRegistry: string) {
    return this.http.get(`${baseUrl}/${patientRegistry}/vital-signs`).toPromise();
  }

  deleteVitalSign(patientRegistry: string, vitalSignId: string) {
    return this.http.delete(`${baseUrl}/${patientRegistry}/vital-signs/${vitalSignId}`).toPromise();
  }
}
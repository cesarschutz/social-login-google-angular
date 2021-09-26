import { Component, OnInit } from '@angular/core';
import { PatientModel, PatientService } from 'app/services/patient.service';
import { Router } from '@angular/router';

declare interface TableData {
  headerRow: string[];
  listPatients: any;
}

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  public tableData: TableData = { headerRow: null, listPatients: null };

  constructor(private router: Router, private patientService: PatientService) { }

  async ngOnInit() {
    this.tableData = {
      headerRow: ['Registro', 'Nome', 'Quarto', 'Responsável'],
      listPatients: await this.patientService.getAll()
    };
  }

  selectPatient(patient: PatientModel) {
    this.router.navigateByUrl('/patient-detail', {
      state: { patient: patient }
    });
  }

  createPatient() {
    this.router.navigateByUrl('/patient-detail', {
      state: { patient: new PatientModel() }
    });
  }

  viewVitalSigns(patient: PatientModel) {
    this.router.navigateByUrl('/vital-signs', {
      state: { patient: patient }
    });
  }
}

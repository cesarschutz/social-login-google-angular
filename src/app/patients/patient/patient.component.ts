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
      headerRow: ['ID', 'Registry', 'Name', 'Room', 'Responsible'],
      listPatients: await this.patientService.getAll()
    };
  }

  selectPatient(patient: PatientModel) {
    this.router.navigateByUrl('/patient-detail', {
      state: { patient: patient }
    }); 
  }
}

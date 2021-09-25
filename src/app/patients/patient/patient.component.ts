import { Component, OnInit } from '@angular/core';
import { PatientModel, PatientService } from 'app/services/patient.service';

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

  public tableData: TableData;

  constructor(private patientService: PatientService) {

  }

  async ngOnInit() {
    this.tableData = {
      headerRow: ['ID', 'Registry', 'Name', 'Room', 'Responsible'],
      listPatients: await this.patientService.getAll()
    };
  }
}

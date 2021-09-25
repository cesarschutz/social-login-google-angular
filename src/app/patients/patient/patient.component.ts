import { Component, OnInit } from '@angular/core';
import { PatientModel, PatientService } from 'app/services/patient.service';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  public tableData1: TableData;
  public listPatients: any;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: ['ID', 'Registry', 'Name', 'Room', 'Responsible'],
      dataRows: [
        ['1', '12345', 'Michel', '001', 'Michel'],
        ['2', '12345', 'Cesar', '001', 'Cesar']
      ]
    };
    this.retrievePatients();
  }

  private retrievePatients() {
    this.patientService.getAll()
      .subscribe(
        data => {
          this.listPatients = data;
          debugger;
          console.log(data);
        },
        error => {
          debugger;
          console.log(error);
        });
  }

}

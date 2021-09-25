import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ 'ID', 'Registry', 'Name', 'Room', 'Responsible'],
      dataRows: [
          ['1', '12345', 'Michel', '001', 'Michel'],
          ['2', '12345', 'Cesar', '001', 'Cesar']
      ]
  };
  }

}

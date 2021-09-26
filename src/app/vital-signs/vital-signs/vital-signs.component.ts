import { Component, OnInit } from '@angular/core';
import { PatientModel, PatientService } from 'app/services/patient.service';
import { Router } from '@angular/router';

declare interface TableData {
  headerRow: string[];
  listPatients: any;
}

@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs.component.html',
  styleUrls: ['./vital-signs.component.css']
})
export class VitalSignsComponent implements OnInit {

  public tableData: TableData = { headerRow: null, listPatients: null };
  listPatients: any;
  patientRegistrySearch: string;

  constructor(private router: Router, private patientService: PatientService) { }

  async ngOnInit() {
    this.listPatients = await this.patientService.getAll();
    this.tableData = {
      headerRow: ['Registro', 'Nome', 'Quarto'],
      listPatients: this.listPatients
    };
  }

  searchPatients() {
    if(this.patientRegistrySearch){
      this.tableData.listPatients = this.listPatients.filter(patient => patient.registry.indexOf(this.patientRegistrySearch) !== -1);
    } else {
      this.tableData.listPatients = this.listPatients;
    }
  }

  selectPatient(patient: PatientModel) {
    this.router.navigateByUrl('/patient-detail', {
      state: { patient: patient }
    });
  }

}

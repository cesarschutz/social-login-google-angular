import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientModel } from 'app/services/patient.service';

@Component({
  selector: 'app-patient-datil',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetail implements OnInit {

  patient: PatientModel;

  constructor(private router: Router) {
    this.patient = this.router.getCurrentNavigation().extras.state.patient;
  }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientModel } from 'app/services/patient.service';

@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs-create.component.html',
  styleUrls: ['./vital-signs-create.component.css']
})
export class VitalSignsCreateComponent implements OnInit {

  patient: PatientModel = new PatientModel();

  constructor(private router: Router) {
    this.patient = this.router.getCurrentNavigation().extras?.state?.patient;
  }

  ngOnInit(): void {
    
  }
}

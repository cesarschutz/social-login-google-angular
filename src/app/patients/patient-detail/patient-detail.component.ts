import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientModel, PatientService } from 'app/services/patient.service';

declare var $: any;

@Component({
  selector: 'app-patient-datil',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetail implements OnInit {

  patient: PatientModel;

  constructor(
    private router: Router,
    private patientService: PatientService) {
    this.patient = this.router.getCurrentNavigation().extras.state.patient;
  }

  ngOnInit() {

  }

  updatePatient() {
    alert('oi');
    this.showNotification('Sucesso!', 'Paciente Atualizado com Sucesso!' ,'success');
  }

  showNotification(title, message, type) {
    $.notify({
      title: title,
      message: message
    }, {
      type: type,
      timer: 500,
      placement: {
        from: 'top',
        align: 'right'
      }
    });
  }

}

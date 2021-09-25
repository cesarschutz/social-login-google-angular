import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'app/services/notifications.service';
import { PatientModel, PatientService } from 'app/services/patient.service';

@Component({
  selector: 'app-patient-datil',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetail implements OnInit {

  patient: PatientModel = new PatientModel();

  constructor(
    private router: Router,
    private patientService: PatientService,
    private notificationsService: NotificationsService) {
    this.patient = this.router.getCurrentNavigation().extras?.state?.patient;
  }

  ngOnInit() {

  }

  async updatePatient() {
    debugger;
    await this.patientService.update(this.patient);
    this.notificationsService.showNotificationSuccess('Paciente Atualizado!');
    this.router.navigateByUrl('/patients');
  }
}

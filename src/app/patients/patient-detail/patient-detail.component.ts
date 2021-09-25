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
    await this.patientService.update(this.patient);
    this.notificationsService.showNotificationSuccess(`Paciente com ID ${this.patient.id} atualizado!`);
    this.router.navigateByUrl('/patients');
  }

  async deletePatient() {
    await this.patientService.delete(this.patient.registry);
    this.notificationsService.showNotificationSuccess(`Paciente com ID ${this.patient.id} Excluído!`);
    this.router.navigateByUrl('/patients');
  }
}

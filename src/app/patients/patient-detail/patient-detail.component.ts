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

  async save() {
    this.patient.registry = (Math.floor(Math.random() * (999999 - 0 + 1)) + 1).toString();
    await this.patientService.create(this.patient);
    this.notificationsService.showNotificationSuccess('Paciente criado!');
    this.router.navigateByUrl('/patients');
  }

  async update() {
    await this.patientService.update(this.patient);
    this.notificationsService.showNotificationSuccess(`Paciente com registro ${this.patient.registry} atualizado!`);
    this.router.navigateByUrl('/patients');
  }

  async delete() {
    await this.patientService.delete(this.patient.registry);
    this.notificationsService.showNotificationSuccess(`Paciente com registro ${this.patient.registry} excluído!`);
    this.router.navigateByUrl('/patients');
  }
}

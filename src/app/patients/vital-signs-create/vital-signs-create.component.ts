import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'app/services/notifications.service';
import { PatientModel, PatientService, VitalSignModel } from 'app/services/patient.service';

@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs-create.component.html',
  styleUrls: ['./vital-signs-create.component.css']
})
export class VitalSignsCreateComponent implements OnInit {

  patient: PatientModel = new PatientModel();
  vitalSign: VitalSignModel = new VitalSignModel();

  constructor(private router: Router, private notificationsService: NotificationsService, private patientService: PatientService) {
    this.patient = this.router.getCurrentNavigation().extras?.state?.patient;
  }

  ngOnInit(): void {

  }

  async save() {
    this.vitalSign.patientRegistry = this.patient.registry;
    await this.patientService.createVitalSign(this.vitalSign);
    this.patient.vitalSigns.push(this.vitalSign);
    this.notificationsService.showNotificationSuccess('Sina vital criado!');
    this.router.navigateByUrl('/vital-signs', {
      state: { patient: this.patient }
    });
  }
}

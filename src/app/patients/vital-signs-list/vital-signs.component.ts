import { Component, OnInit } from '@angular/core';
import { PatientModel, PatientService } from 'app/services/patient.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'app/services/notifications.service';

declare interface TableData {
  headerRow: string[];
}

@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs.component.html',
  styleUrls: ['./vital-signs.component.css']
})
export class VitalSignsComponent implements OnInit {

  patient: PatientModel = new PatientModel();

  public tableData: TableData = { headerRow: null };

  constructor(private router: Router, private patientService: PatientService, private notificationsService: NotificationsService) {
    this.patient = this.router.getCurrentNavigation().extras?.state?.patient;
  }

  async ngOnInit() {
    this.patient.vitalSigns = await this.patientService.getVitalSigns(this.patient.registry);
    this.tableData = {
      headerRow: ['Frequência cardíaca', 'Respiração por minuto', 'Temperatura corporal', 'Pressão sistólica', 'Pressão diastólica', 'oxigênio no sangue', 'Observação'],
    };
  }

  async deleteVitalsign(vitalSign) {
    await this.patientService.deleteVitalSign(this.patient.registry, vitalSign.id);
    this.patient.vitalSigns = await this.patientService.getVitalSigns(this.patient.registry);
    this.notificationsService.showNotificationSuccess(`Sinal Vital excluído!`);
  }

  createVitalSign(){
    this.router.navigateByUrl('/vital-signs-create', {
      state: { patient: this.patient }
    });
  }
}

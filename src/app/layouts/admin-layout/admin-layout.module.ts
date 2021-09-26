import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { PatientComponent } from '../../patients/patient/patient.component';
import { PatientDetail } from 'app/patients/patient-detail/patient-detail.component';
import { VitalSignsComponent } from 'app/patients/vital-signs-list/vital-signs.component';
import { VitalSignsCreateComponent } from 'app/patients/vital-signs-create/vital-signs-create.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    PatientComponent,
    PatientDetail,
    VitalSignsComponent,
    VitalSignsCreateComponent
  ]
})

export class AdminLayoutModule {}

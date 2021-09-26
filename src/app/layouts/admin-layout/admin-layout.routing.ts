import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { PatientComponent } from '../../patients/patient/patient.component';
import { PatientDetail } from 'app/patients/patient-detail/patient-detail.component';
import { VitalSignsComponent } from 'app/patients/vital-signs-list/vital-signs.component';
import { VitalSignsCreateComponent } from 'app/patients/vital-signs-create/vital-signs-create.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'patients', component: PatientComponent },
    { path: 'patient-detail', component: PatientDetail },
    { path: 'vital-signs', component: VitalSignsComponent },
    { path: 'vital-signs-create', component: VitalSignsCreateComponent }
];

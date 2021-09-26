import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { PatientComponent } from '../../patients/patient/patient.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { PatientDetail } from 'app/patients/patient-detail/patient-detail.component';
import { VitalSignsComponent } from 'app/patients/vital-signs-list/vital-signs.component';
import { VitalSignsCreateComponent } from 'app/patients/vital-signs-create/vital-signs-create.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TablesComponent },
    { path: 'patients', component: PatientComponent },
    { path: 'patient-detail', component: PatientDetail },
    { path: 'vital-signs', component: VitalSignsComponent },
    { path: 'vital-signs-create', component: VitalSignsCreateComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
];

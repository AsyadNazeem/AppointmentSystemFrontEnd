import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {ManageAppointmentComponent} from './manage-appointment/manage-appointment.component';
import {RouteGuardService} from '../services/route-guard.service';
import {ManageChannelComponent} from './manage-channel/manage-channel.component';


export const MaterialRoutes: Routes = [
  {
    path: 'appointment',
    component: ManageAppointmentComponent,
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin']
    }
  },
  {
    path: 'channelling',
    component: ManageChannelComponent,
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin']
    }
  }
];

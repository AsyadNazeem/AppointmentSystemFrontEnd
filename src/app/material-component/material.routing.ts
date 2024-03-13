import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {ManageAppointmentComponent} from './manage-appointment/manage-appointment.component';
import {RouteGuardService} from '../services/route-guard.service';
import {ManageChannelComponent} from './manage-channel/manage-channel.component';
import {ManageOrderComponent} from './manage-order/manage-order.component';
import {MakeAppointmentComponent} from './make-appointment/make-appointment.component';


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
  },
  {
    path: 'order',
    component: ManageOrderComponent,
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin', 'user']
    }
  },
  {
    path: 'MakeAppointment',
    component: MakeAppointmentComponent,
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['user']
    }
  }
];

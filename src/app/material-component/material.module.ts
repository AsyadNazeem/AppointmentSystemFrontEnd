import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
import { MaterialModule } from '../shared/material-module';
import { ViewBillProductsComponent } from './dialog/view-bill-products/view-bill-products.component';
import { ConfimationComponent } from './dialog/confimation/confimation.component';
import { ChangePasswordComponent } from './dialog/change-password/change-password.component';
import { ManageAppointmentComponent } from './manage-appointment/manage-appointment.component';
import { AppointmentComponent } from './dialog/appointment/appointment.component';
import { ManageChannelComponent } from './manage-channel/manage-channel.component';
import { ChannelComponent } from './dialog/channel/channel.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { BookAppointmentComponent } from './dialog/book-appointment/book-appointment.component';
import { GetAppointmentComponent } from './get-appointment/get-appointment.component';
import { DatePipe } from '@angular/common';
import { YourAppointmentsComponent } from './your-appointments/your-appointments.component'; // Import DatePipe


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    CommonModule
  ],
  providers: [DatePipe],
  declarations: [
    ViewBillProductsComponent,
    ConfimationComponent,
    ChangePasswordComponent,
    ManageAppointmentComponent,
    AppointmentComponent,
    ManageChannelComponent,
    ChannelComponent,
    ManageOrderComponent,
    MakeAppointmentComponent,
    BookAppointmentComponent,
    GetAppointmentComponent,
    YourAppointmentsComponent,
  ]
})
export class MaterialComponentsModule {}

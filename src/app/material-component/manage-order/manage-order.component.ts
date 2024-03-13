import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChannelService} from '../../services/channel.service';
import {AppointmentService} from '../../services/appointment.service';
import {SnackbarService} from '../../services/snackbar.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {GlobalConstants} from '../../shared/global-constants';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.scss']
})
export class ManageOrderComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource: any[] = [];
  manageOrderForm: any = FormGroup;
  channeling: any[] = [];
  appointment: any[] = [];

  responsiveMessage: any;

  constructor(private formBuilder: FormBuilder,
              private channellingService: ChannelService,
              private appointmentService: AppointmentService,
              private snackbarService: SnackbarService,
              private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.getAppointment();
    this.manageOrderForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      contactNumber: [null, [Validators.required, Validators.pattern(GlobalConstants.contactNumberRegex)]],
      paymentMethod: [null, [Validators.required]],
      channelling: [null, [Validators.required]],
      appointment: [null, [Validators.required]],
      address: [null, [Validators.required]],
      billedby: [null, [Validators.required]],
      price: [null, [Validators.required]],
      total: [0, [Validators.required]],
    });
  }


  getAppointment() {
    this.appointmentService.getFilteredAppointment().subscribe((response: any) => {
      this.ngxService.stop();
      this.appointment = response;
    }, (error: any) => {
      this.ngxService.stop();
      console.log(error);
      if (error.error?.message) {
        this.responsiveMessage = error.error?.message;
      }else{
        this.responsiveMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responsiveMessage, GlobalConstants.error);
    });
  }

  getChannelByAppointment(value: any){
    this.channellingService.getChannelByAppointment(value.id).subscribe((response: any) => {
      this.channeling = response;
      this.manageOrderForm.controls['amount'].setValue('null');
    }, (error: any) => {
      console.log(error);
      if (error.error?.message) {
        this.responsiveMessage = error.error?.message;
      } else {
        this.responsiveMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responsiveMessage, GlobalConstants.error);
    });

  }

  // getChennellingDetails(value: any){
  //   this.channellingService.getById(value.id).subscribe((response: any) => {
  //     this.channelling = response;
  //     this.manageOrderForm.controls['price'].setValue('');
  // }, (error: any) => {
  //     console.log(error);
  //     if (error.error?.message) {
  //       this.responsiveMessage = error.error?.message;
  //     } else {
  //       this.responsiveMessage = GlobalConstants.genericError;
  //     }
  //     this.snackbarService.openSnackBar(this.responsiveMessage, GlobalConstants.error);
  //   });
  // }

}

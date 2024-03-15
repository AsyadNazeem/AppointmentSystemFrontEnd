import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AppointmentService} from '../../../services/appointment.service';
import {SnackbarService} from '../../../services/snackbar.service';
import {GlobalConstants} from '../../../shared/global-constants';
import {ChannelService} from '../../../services/channel.service';
import {BookedAppointmentService} from '../../../services/booked-appointment.service';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {

  onAddBookAppointment = new EventEmitter();
  onEditBookAppointment = new EventEmitter();
  bookAppointmentForm: any = FormGroup;
  dialogAction: any = 'Add';
  action: any = 'Add';
  channelling: any = [];

  responseMessage: any;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<BookAppointmentComponent>,
              private channellingService: ChannelService,
              private bookedAppointmentService: BookedAppointmentService,
              private snackbarService: SnackbarService) { }
  ngOnInit(): void {
    this.bookAppointmentForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      channellingId: [null, Validators.required],
      email: [null, [Validators.required]],
      age: [null, [Validators.required]],
      mobile: [null, [Validators.required]],
      doctor: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      date: [null, [Validators.required]],
    });

    if (this.dialogAction.action === 'Edit') {
      this.dialogAction = 'Edit';
      this.action = 'Update';
      this.bookAppointmentForm.patchValue(this.dialogData.data);
    }
    this.getAppointments();
  }


  getAppointments(){
    this.channellingService.getChannels().subscribe((response: any) => {
      this.channelling = response;
    }, (error: any) => {
      console.log(error);
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    });
  }

  handleSubmit() {
    if (this.dialogAction === 'Edit') {
      this.edit();
    } else {
      this.add();
    }
  }

  add() {
    var formData = this.bookAppointmentForm.value;
    console.log('Form Data:', formData); // Log form data to check if date is included
    var data = {
      name: formData.name,
      age : formData.age,
      email : formData.email,
      mobile : formData.mobile,
      channellingId : formData.channellingId,
      doctor : formData.doctor,
      date : formData.date
    };

    this.bookedAppointmentService.add(data).subscribe((response: any) => {
      this.dialogRef.close();
      this.onAddBookAppointment.emit();
      this.responseMessage = response.message;
      this.snackbarService.openSnackBar(this.responseMessage, 'success');
    } , (error) => {
      this.dialogRef.close();
      console.error(error);
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    });

  }

  edit() {
    var formData = this.bookAppointmentForm.value;
    var data = {
      id: this.dialogData.data.id,
      name: formData.name,
      channellingId: formData.channellingId,
      age : formData.age,
      email : formData.email,
      mobile : formData.mobile,
      doctor: formData.doctor,
      date : formData.date
    };

    this.bookedAppointmentService.update(data).subscribe((response: any) => {
      this.dialogRef.close();
      this.onAddBookAppointment.emit();
      this.responseMessage = response.message;
      this.snackbarService.openSnackBar(this.responseMessage, 'success');
    } , (error) => {
      this.dialogRef.close();
      console.error(error);
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    });
  }

  protected readonly channelForm = FormGroup;
}


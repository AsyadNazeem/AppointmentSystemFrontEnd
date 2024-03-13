import { Component, OnInit } from '@angular/core';
import {ChannelService} from '../../services/channel.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {SnackbarService} from '../../services/snackbar.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {GlobalConstants} from '../../shared/global-constants';
import {ChannelComponent} from '../dialog/channel/channel.component';
import {element} from 'protractor';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.scss']
})
export class MakeAppointmentComponent implements OnInit {

  displayedColumns: string[] = ['name', 'appointmentName', 'description', 'hospital', 'edit'];
  dataSource: any;
  // length1: any;
  responseMessage: any;

  constructor(private channelService: ChannelService,
              private ngxService: NgxUiLoaderService,
              private dialog: MatDialog,
              private snackbarService: SnackbarService,
              private router: Router) {}

  ngOnInit(): void {
    this.ngxService.start();
    this.tableData();
  }

  tableData() {
    this.channelService.getChannels().subscribe((response: any) => {
      this.ngxService.stop();
      this.dataSource = new MatTableDataSource(response);
    }, (error: any) => {
      this.ngxService.stop();
      console.log(error.error?.message);
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // handleAddAction() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.data = {
  //     action: 'Add'
  //   };
  //   dialogConfig.width = '850px';
  //   const dialogRef = this.dialog.open(ChannelComponent, dialogConfig);
  //   this.router.events.subscribe(() => {
  //     dialogRef.close();
  //   });
  //
  //   const sub = dialogRef.componentInstance.onAddChannel.subscribe(() => {
  //     this.tableData();
  //   });
  // }

  // handleEditAction(values: any) {
  // }
  //
  // handleDeleteAction(values: any) {
  // }
  //
  // onChange(status: any, id: any) {
  // }

  bookAppointment(){}

}

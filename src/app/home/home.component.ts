import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import {ForgotPasswordComponent} from '../forgot-password/forgot-password.component';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private userServices: UserService,
              private route: Router,
              ) { }

  ngOnInit(): void {
    this.userServices.checkToken().subscribe((response: any) => {
      this.route.navigate(['/cafe/dashboard']);
    }, (error: any) => {
      console.log('error', error);
    });
  }


  // tslint:disable-next-line:typedef
   handleSignupAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    this.dialog.open(SignupComponent, dialogConfig);
  }

  // tslint:disable-next-line:typedef
  handleForgotPasswordAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    this.dialog.open(ForgotPasswordComponent, dialogConfig);
  }

  handleLoginAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    this.dialog.open(ForgotPasswordComponent, dialogConfig);
  }

}

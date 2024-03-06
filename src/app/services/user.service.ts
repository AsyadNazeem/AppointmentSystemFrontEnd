import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  signup(date: any){
    return this.httpClient.post(this.url + '/user/signup', date, {headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }

  forgotPassword(date: any){
    return this.httpClient.post(this.url + '/user/forgotPassword', date, {headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }

  login(date: any){
    return this.httpClient.post(this.url + '/user/login', date, {headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }

  checkToken(){
    return this.httpClient.get(this.url + '/user/checkToken');
  }
}

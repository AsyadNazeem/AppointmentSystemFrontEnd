import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookedAppointmentService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}
  add(data: any) {
    return this.httpClient.post(this.url + '/bookedAppointment/add', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  update(data: any) {
    return this.httpClient.post(this.url + '/bookedAppointment/update', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  getAllBookedAppointment(){
    return this.httpClient.get(this.url + '/bookedAppointment/get');
  }

  getAllBookedAppointmentById(id: any){
    return this.httpClient.get(this.url + '/bookedAppointment/getById/' + id);
  }
}

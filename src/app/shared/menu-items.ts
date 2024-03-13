import {Injectable} from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  role: string;
}

const MENUITEMS = [
  {state: 'dashboard', name: 'DASHBOARD', type: 'link', icon: 'dashboard', role: ''},
  {state: 'appointment', name: 'Manage Appointment', type: 'link', icon: 'contact_mail', role: 'admin'},
  {state: 'channelling', name: 'Manage Channelling', type: 'link', icon: 'recent_actors', role: 'admin'},
  {state: 'order', name: 'Manage order', type: 'link', icon: 'shopping_cart', role: ''},
  {state: 'MakeAppointment' , name: 'Make an Appointment', type: 'link', icon: 'contact_mail', role: 'user'},
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}

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
  {state: 'appointment', name: 'Manage Appointment', type: 'link', icon: 'category', role: 'admin'},
  {state: 'channelling', name: 'Manage Channelling', type: 'link', icon: 'inventory_2', role: 'admin'},
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}

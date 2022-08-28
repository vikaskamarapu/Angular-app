import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public selectedindex: number = 0;
  public showContacts: boolean = true;
  public contacts: Contact[] = [
    { "id": "", "name": "Harsha Vardhan Pendyala", "email": "harsha@fosterate.com", "mobile": "7777888855", "landline": "040 30 1231211", "website": "http://www.technovert.com", "address": "hyderabad Telangana 500061" },

    { "id": "", "name": "Network Duke", "email": "duke@fosterate.com", "mobile": "7777888855", "landline": "040 30 1231211", "website": "http://www.technovert.com", "address": "hyderabad Telangana 500061" },

    { "id": "", "name": "Arshaque Mohammed", "email": "arshaque@fosterate.com", "mobile": "7777888855", "landline": "040 30 1231211", "website": "http://www.technovert.com", "address": "hyderabad Telangana 500061" }
  ]

  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public selectedindex: number = -1;
  public arr: any = [
    {"name": "Harsha Vardhan Pendyala", "email": "harsha@fosterate.com", "mobile": 7777888855, "landline": "040 30 1231211", "website": "http://www.technovert.com", "address": "hyderabad Telangana 500061"},

    {"name": "Network Duke", "email": "duke@fosterate.com", "mobile": 7777888855, "landline": "040 30 1231211", "website": "http://www.technovert.com", "address":  "hyderabad Telangana 500061"},

    {"name": "Arshaque Mohammed", "email": "arshaque@fosterate.com", "mobile": 7777888855, "landline": "040 30 1231211", "website": "http://www.technovert.com", "address": "hyderabad Telangana 500061"},

  ]

  constructor() { }
}
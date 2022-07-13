import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name: string = "";
  public email: string = "";
  public mobile: number = 0;
  public landline: number = 0;
  public website: string = "";
  public address: string = "";
  public showContacts: boolean = false;
  

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  showDetails(i: number) {
    let contact = this.userService.arr[i];
    this.name = contact.name 
    this.email = contact.email
    this.mobile = contact.mobile
    this.landline = contact.landline
    this.website = contact.website
    this.address = contact.address
    this.userService.selectedindex= i
    this.showContacts=true;
  }
  onEdit(){
    this.router.navigate(['/edit'])
  }
  onDelete(){
    this.userService.arr.splice(this.userService.selectedindex, 1);
  }
}

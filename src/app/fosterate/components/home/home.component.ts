import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../model/contact';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contactList : Contact[] = [];
  contactObj:Contact={
    id: '',
    name: '',
    email: '',
    mobile: '',
    landline: '',
    website: '',
    address: ''
  }

  constructor(public userService: UserService, private router: Router) { 
    this.contactObj=this.userService.getContactDetails(this.userService.selectedindex);
  }

  ngOnInit(): void {
    
  }

  onEdit(){
    this.router.navigate(['/edit']);
  }
  onDelete(){
    this.userService.contacts.splice(this.userService.selectedindex, 1);
    this.userService.selectedindex=0;
    if(this.userService.contacts.length===0){
      this.userService.showContacts=false;
    }
  }
  onContactSelected(event:Contact){
    this.contactObj=event;
  }
}

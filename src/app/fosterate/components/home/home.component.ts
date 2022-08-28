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
  contactObj:Contact={
    id: '',
    name: '',
    email: '',
    mobile: '',
    landline: '',
    website: '',
    address: ''
  }

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.contactObj.name=this.userService.contacts[this.userService.selectedindex].name;
    this.contactObj.email = this.userService.contacts[this.userService.selectedindex].email;
    this.contactObj.mobile = this.userService.contacts[this.userService.selectedindex].mobile;
    this.contactObj.landline = this.userService.contacts[this.userService.selectedindex].landline;
    this.contactObj.website = this.userService.contacts[this.userService.selectedindex].website;
    this.contactObj.address = this.userService.contacts[this.userService.selectedindex].address;
  }
  showDetails(i: number) {
    this.userService.selectedindex= i;
    this.userService.showContacts=true;
    this.ngOnInit();
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
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Contact } from '../../model/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  contactObj: Contact = {
    id: '',
    name: '',
    email: '',
    mobile: '',
    landline: '',
    website: '',
    address: ''
  }

  formType: string = 'Edit';
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.contactObj = this.userService.getContactDetails(this.userService.selectedindex);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  name: String = '';
  email: String = '';
  mobile: String = '';
  landline: String = '';
  website: String = '';
  address: String = '';

  constructor(private editForm: FormBuilder, public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.name = this.userService.contacts[this.userService.selectedindex].name;
    this.email = this.userService.contacts[this.userService.selectedindex].email;
    this.mobile = this.userService.contacts[this.userService.selectedindex].mobile;
    this.landline = this.userService.contacts[this.userService.selectedindex].landline;
    this.website = this.userService.contacts[this.userService.selectedindex].website;
    this.address = this.userService.contacts[this.userService.selectedindex].address;
    this.editContactForm.patchValue({
      name: this.name,
      email: this.email, 
      mobile: this.mobile, 
      landline: this.landline, 
      website: this.website, 
      address: this.address
    });
  }
  editContactForm = this.editForm.group({
    name: [this.name, Validators.required],
    email: [this.email, [Validators.required, Validators.email]],
    mobile: [this.mobile, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    landline: [this.landline,],
    website: [this.website],
    address: [this.address],
  })


  onSubmit() {
    this.userService.contacts[this.userService.selectedindex] = this.editContactForm.value;
    this.router.navigate(['/']);

  }
  showDetails(i: number) {
    this.userService.selectedindex = i;
    this.userService.showContacts = true;
    this.router.navigate(['/']);
  }
}

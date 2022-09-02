import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../../model/contact';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() contactObj: Contact = {
    id: '',
    name: '',
    email: '',
    mobile: '',
    landline: '',
    website: '',
    address: ''
  }

  @Input() formType: string = '';

  ContactForm = this.form.group({
    name: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    mobile: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    landline: ["",],
    website: [""],
    address: [""],
  });

  constructor(private form: FormBuilder, public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.ContactForm.patchValue(this.contactObj);
  }

  onSubmit() {
    if (this.formType == 'Edit') {
      this.userService.contacts[this.userService.selectedindex] = this.ContactForm.value;
    }
    else {
      this.userService.contacts.push(this.ContactForm.value);
      this.userService.selectedindex = this.userService.contacts.length - 1;
      this.userService.showContacts = true;
    }
    this.router.navigate(['/']);
  }
}

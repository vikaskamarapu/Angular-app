import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private addForm: FormBuilder, public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
  }
  addContactForm = this.addForm.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    landline: ['',],
    website: [''],
    address: [''],
  })
  onSubmit() {
    if (this.addContactForm.value.name === '' || this.addContactForm.value.email === '' || this.addContactForm.value.mobile === '') {
      window.alert('Fill all required fields')
    }
    else {
      this.userService.arr.push(this.addContactForm.value)
      this.userService.selectedindex = this.userService.arr.length - 1;
      this.userService.showContacts = true;
      this.router.navigate(['/'])
    }
  }
  showDetails(i: number) {
    this.userService.selectedindex = i;
    this.userService.showContacts = true;
    this.router.navigate(['/']);
  }
}

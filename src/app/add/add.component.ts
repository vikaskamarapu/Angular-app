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
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    landline: ['',],
    website: [''],
    address: [''],
  })
  onSubmit() {
    this.userService.arr.push(this.addContactForm.value)
    this.userService.selectedindex = this.userService.arr.length - 1;
    this.userService.showContacts = true;
    this.router.navigate(['/'])
  }
  showDetails(i: number) {
    this.userService.selectedindex = i;
    this.userService.showContacts = true;
    this.router.navigate(['/']);
  }
}

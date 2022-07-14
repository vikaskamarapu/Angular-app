import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private editForm: FormBuilder, public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  editContactForm = this.editForm.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    landline: ['',],
    website: [''],
    address: [''],
  })
  onSubmit() {
    if (this.editContactForm.value.name === '' || this.editContactForm.value.email === '' || this.editContactForm.value.mobile === '') {
      window.alert('Fill all required fields')
    }
    else {
      this.userService.arr[this.userService.selectedindex] = this.editContactForm.value;
      this.router.navigate(['/'])
    }
  }
  showDetails(i:number){
    this.userService.selectedindex=i;
    this.userService.showContacts=true;
    this.router.navigate(['/']);
  }
}

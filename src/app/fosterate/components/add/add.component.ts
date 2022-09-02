import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  formType : string = 'Add';
  constructor(public userService : UserService) { }

  ngOnInit(): void {

  }
  
  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  showDetails(i: number) {
    this.userService.selectedindex= i
    this.userService.showContacts=true;
  }
  onEdit(){
    this.router.navigate(['/edit'])
  }
  onDelete(){
    this.userService.arr.splice(this.userService.selectedindex, 1);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../model/contact';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Output() contactSelected = new EventEmitter<Contact>();

  contactList: Contact[] = [];

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.contactList = this.userService.getAllContacts();
  }

  showDetails(contact: Contact, i: number) {
    this.contactSelected.emit(contact);
    this.userService.selectedindex = i;
    this.userService.showContacts = true;
    this.router.navigate(['/']);
  }

}

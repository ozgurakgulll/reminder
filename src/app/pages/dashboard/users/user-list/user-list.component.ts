import { Component, Input } from '@angular/core';
import {User} from "../users.component";
export const Tag:any ={
  0:'green',
  1:'cyan',
  2:'blue',
  3:'geekblue',
  4:'purple',
  5:'orange'
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() usersData: User[] = [];
  tag=Tag

  onEdit() {

  }
}

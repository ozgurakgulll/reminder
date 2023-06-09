import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
export interface User{
  date:string,
  description:string,
  dose:number,
  name:string,
  phone:number[],
  surname:string,
  tc:number
  createdAt:string
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent{
  usersData:User[] = [];
 constructor(private router: Router) {
 }

  onClick(modalOpen: boolean) {
    this.router.navigate(['/','add']);
  }
}

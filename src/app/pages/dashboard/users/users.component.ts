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
export class UsersComponent implements OnInit{
  usersData:User[] = [];
 constructor(private router: Router,private http: HttpClient) {
 }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/sms').subscribe((a:any)=>{
      this.usersData=a
      console.log(this.usersData);
    })

  }
  onClick(modalOpen: boolean) {
    this.router.navigate(['/','add']);
  }
}

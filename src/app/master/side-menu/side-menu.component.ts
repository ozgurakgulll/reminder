import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      let date = params['startdate'];
      console.log(date); // Print the parameter to the console.
    });
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams:any) => {
      console.log(queryParams)
    });
  }
}

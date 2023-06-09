import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import { CreateUserComponent } from './create-user/create-user.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";




@NgModule({
  declarations: [
    DashboardComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzDividerModule,
    NzCardModule,
    NzIconModule,
    NzButtonModule
  ]
})
export class DashboardModule { }

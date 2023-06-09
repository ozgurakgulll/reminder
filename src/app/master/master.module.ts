import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master.component';
import {HeaderComponent} from "../shared/components";
import {MasterRoutingModule} from "./master-routing.module";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import { LoginComponent } from './login/login.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SideMenuComponent } from './side-menu/side-menu.component';
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";



@NgModule({
  declarations: [
    MasterComponent,
    LoginComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    MasterRoutingModule,
    NzLayoutModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzMenuModule,
    NzIconModule,
    NzBreadCrumbModule
  ]
})
export class MasterModule { }

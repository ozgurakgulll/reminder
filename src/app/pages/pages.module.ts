import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UsersComponent } from './dashboard/users/users.component';
import { UserListComponent } from './dashboard/users/user-list/user-list.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzTagModule} from "ng-zorro-antd/tag";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent
  ],
    imports: [CommonModule, PagesRoutingModule, NzButtonModule, NzIconModule, NzTableModule, NzAvatarModule, NzInputModule, NzTagModule, FormsModule]
})
export class PagesModule {}

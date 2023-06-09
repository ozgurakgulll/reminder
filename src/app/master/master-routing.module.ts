import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';
import { NgModule } from '@angular/core';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pages/pages.module').then((m) => m.PagesModule)
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {}

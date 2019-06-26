import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormListComponent } from './user-form-list/user-form-list.component';

const routes: Routes = [
  { path: '', component: UserFormListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }

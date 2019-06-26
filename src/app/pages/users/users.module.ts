import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormListComponent } from './user-form-list/user-form-list.component';
import { UsersRoutingModule } from './users.routing-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ UserFormListComponent ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }

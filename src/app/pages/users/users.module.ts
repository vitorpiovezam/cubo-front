import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormListComponent } from './user-form-list/user-form-list.component';
import { UsersRoutingModule } from './users.routing-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartDougHnutComponent } from 'src/app/shared/components/chart-doug-hnut/chart-doug-hnut.component';

@NgModule({
  declarations: [ UserFormListComponent, ChartDougHnutComponent ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UsersModule { }

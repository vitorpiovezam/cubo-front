import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartDougHnutComponent } from './components/chart-doug-hnut/chart-doug-hnut.component';
import { ChartsModule } from 'ng2-charts-x';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ChartsModule,
  ],
  exports: [
    ChartsModule
  ]
})
export class SharedModule { 
  
}

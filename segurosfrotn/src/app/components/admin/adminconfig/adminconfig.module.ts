import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminconfigRoutingModule } from './adminconfig-routing.module';
import { AdminconfigComponent } from './adminconfig.component';


@NgModule({
  declarations: [AdminconfigComponent],
  imports: [
    CommonModule,
    AdminconfigRoutingModule
  ]
})
export class AdminconfigModule { }

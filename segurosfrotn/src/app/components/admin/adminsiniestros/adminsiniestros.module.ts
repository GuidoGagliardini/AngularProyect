import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsiniestrosRoutingModule } from './adminsiniestros-routing.module';
import { AdminsiniestrosComponent } from './adminsiniestros.component';


@NgModule({
  declarations: [AdminsiniestrosComponent],
  imports: [
    CommonModule,
    AdminsiniestrosRoutingModule
  ]
})
export class AdminsiniestrosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsegurosRoutingModule } from './adminseguros-routing.module';
import { AdminsegurosComponent } from './adminseguros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminsegurosComponent],
  imports: [
    CommonModule,
    AdminsegurosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminsegurosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateusersRoutingModule } from './createusers-routing.module';
import { CreateusersComponent } from './createusers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateusersComponent],
  imports: [
    CommonModule,
    CreateusersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CreateusersModule { }

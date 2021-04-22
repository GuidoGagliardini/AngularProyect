import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegurosSingleRoutingModule } from './seguros-single-routing.module';
import { SegurosSingleComponent } from './seguros-single.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SegurosSingleComponent],
  imports: [
    CommonModule,
    SegurosSingleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SegurosSingleModule { }

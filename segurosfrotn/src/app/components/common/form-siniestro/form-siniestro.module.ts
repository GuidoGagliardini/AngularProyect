import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormSiniestroRoutingModule } from './form-siniestro-routing.module';
import { FormSiniestroComponent } from './form-siniestro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormSiniestroComponent],
  imports: [
    CommonModule,
    FormSiniestroRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class FormSiniestroModule { }

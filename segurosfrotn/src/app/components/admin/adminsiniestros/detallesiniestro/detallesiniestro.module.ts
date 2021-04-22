import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesiniestroRoutingModule } from './detallesiniestro-routing.module';
import { DetallesiniestroComponent } from './detallesiniestro.component';


@NgModule({
  declarations: [DetallesiniestroComponent],
  imports: [
    CommonModule,
    DetallesiniestroRoutingModule
  ]
})
export class DetallesiniestroModule { }

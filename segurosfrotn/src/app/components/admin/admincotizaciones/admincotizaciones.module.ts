import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmincotizacionesRoutingModule } from './admincotizaciones-routing.module';
import { AdmincotizacionesComponent } from './admincotizaciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdmincotizacionesComponent],
  imports: [
    CommonModule,
    AdmincotizacionesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdmincotizacionesModule { }

import { NgModule,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CotizaRoutingModule } from './cotiza-routing.module';
import { CotizaComponent } from './cotiza.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CotizaComponent],
  imports: [
    CommonModule,
    CotizaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CotizaModule {}


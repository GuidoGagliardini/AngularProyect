import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilesRoutingModule } from './perfiles-routing.module';
import { PerfilesComponent } from './perfiles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PerfilesComponent],
  imports: [
    CommonModule,
    PerfilesRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class PerfilesModule { }

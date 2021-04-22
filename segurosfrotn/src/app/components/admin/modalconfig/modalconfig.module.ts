import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalconfigRoutingModule } from './modalconfig-routing.module';
import { ModalconfigComponent } from './modalconfig.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ModalconfigComponent],
  imports: [
    CommonModule,
    ModalconfigRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModalconfigModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactopaginaRoutingModule } from './contactopagina-routing.module';
import { ContactopaginaComponent } from './contactopagina.component';


@NgModule({
  declarations: [ContactopaginaComponent],
  imports: [
    CommonModule,
    ContactopaginaRoutingModule
  ]
})
export class ContactopaginaModule { }

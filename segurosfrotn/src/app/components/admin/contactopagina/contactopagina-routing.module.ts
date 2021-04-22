import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactopaginaComponent } from './contactopagina.component';


const routes: Routes = [
  {path: '', component: ContactopaginaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactopaginaRoutingModule { }

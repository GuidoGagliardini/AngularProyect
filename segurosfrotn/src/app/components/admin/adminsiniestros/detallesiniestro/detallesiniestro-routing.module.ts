import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesiniestroComponent } from './detallesiniestro.component';


const routes: Routes = [
  {path:'', component:DetallesiniestroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesiniestroRoutingModule { }

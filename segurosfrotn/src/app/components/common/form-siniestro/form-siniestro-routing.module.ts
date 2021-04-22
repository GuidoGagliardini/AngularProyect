import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormSiniestroComponent } from './form-siniestro.component';


const routes: Routes = [
  {path:'',component:FormSiniestroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormSiniestroRoutingModule { }

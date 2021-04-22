import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmincotizacionesComponent } from './admincotizaciones.component';


const routes: Routes = [
  {path:'' , component: AdmincotizacionesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmincotizacionesRoutingModule { }

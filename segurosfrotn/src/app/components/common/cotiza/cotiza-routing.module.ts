import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotizaComponent } from './cotiza.component';


const routes: Routes = [
  {path :"", component : CotizaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotizaRoutingModule {

 }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SegurosSingleComponent } from './seguros-single.component';


const routes: Routes = [
  {path:'', component: SegurosSingleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegurosSingleRoutingModule { }

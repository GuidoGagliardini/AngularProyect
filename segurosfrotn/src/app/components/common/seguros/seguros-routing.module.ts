import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SegurosComponent } from './seguros.component';
import { SegurosSingleComponent } from '../seguros-single/seguros-single.component';



const routes: Routes = [
  {path : '',  component : SegurosComponent},
  {path:'/seguros/seguros-single/:id', component: SegurosSingleComponent}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegurosRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminconfigComponent } from './adminconfig.component';


const routes: Routes = [
  {path:'' , component: AdminconfigComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminconfigRoutingModule { }

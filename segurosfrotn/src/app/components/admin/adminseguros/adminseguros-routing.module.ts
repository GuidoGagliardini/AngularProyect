import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsegurosComponent } from './adminseguros.component';


const routes: Routes = [
  {path:'' , component: AdminsegurosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsegurosRoutingModule { }

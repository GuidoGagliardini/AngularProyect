import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsiniestrosComponent } from './adminsiniestros.component';


const routes: Routes = [
  {path:'' , component: AdminsiniestrosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsiniestrosRoutingModule { }

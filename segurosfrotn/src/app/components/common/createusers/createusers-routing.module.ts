import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateusersComponent } from './createusers.component';


const routes: Routes = [
  {path:'' , component: CreateusersComponent, data: {hideFooter:true,hideNavbarAdmin:false,hideNavbar:true}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateusersRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalconfigComponent } from './modalconfig.component';

const routes: Routes = [{
  path:'', component: ModalconfigComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalconfigRoutingModule { }

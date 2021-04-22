import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './components/home/home.module';
import { LoginModule } from './components/login/login.module';
import { SegurosModule } from './components/common/seguros/seguros.module';
import { FormSiniestroModule } from './components/common/form-siniestro/form-siniestro.module';
import { CotizaModule } from './components/common/cotiza/cotiza.module';
import { ContactoModule } from './components/common/contacto/contacto.module';
import { SegurosSingleModule } from './components/common/seguros-single/seguros-single.module';

import { AuthGuard } from './auth.guard';
import { RecoveryModule } from './components/common/recovery/recovery.module';
import { ChangeModule } from './components/common/change/change.module';
import { DashboardModule } from './components/admin/dashboard/dashboard.module';
import { ContactopaginaModule } from './components/admin/contactopagina/contactopagina.module';
import { AdminconfigModule } from './components/admin/adminconfig/adminconfig.module';
import { AdmincotizacionesModule } from './components/admin/admincotizaciones/admincotizaciones.module';
import { AdminsegurosModule } from './components/admin/adminseguros/adminseguros.module';
import { AdminsiniestrosModule } from './components/admin/adminsiniestros/adminsiniestros.module';
import { PerfilesModule } from './components/admin/perfiles/perfiles.module';
import { CreateusersModule } from './components/common/createusers/createusers.module';
import { DetallesiniestroModule } from './components/admin/adminsiniestros/detallesiniestro/detallesiniestro.module';
import { VerifyModule } from './components/common/verify/verify.module';


const routes: Routes = [
  {path :  '' , redirectTo : '/home' , pathMatch : 'full'},
  {path : 'home' , loadChildren : ()=> HomeModule, data: {hideFooter:true,hideNavbarAdmin:false,hideNavbar:true}},
  {path: 'login',  loadChildren :()=>LoginModule, data: {hideFooter:true,hideNavbarAdmin:false,hideNavbar:true}},
  {path: 'seguros', loadChildren :()=>SegurosModule, data: {hideFooter:true,hideNavbarAdmin:false,hideNavbar:true}},
  {path: 'seguros/seguros-single/:id', loadChildren :()=>SegurosSingleModule, data: {hideFooter:true,hideNavbarAdmin:false,hideNavbar:true}},
  {path: 'formSiniestro',  loadChildren :()=>FormSiniestroModule, data: {hideFooter:true,hideNavbarAdmin:false,hideNavbar:true}},
  {path: 'cotiza',  loadChildren:()=>CotizaModule, data: {hideFooter:true,hideNavbarAdmin:false,hideNavbar:true}},
  {path: 'contacto',  loadChildren :()=>ContactoModule, data: {hideFooter:true,hideNavbarAdmin:false,hideNavbar:true}},
  {path: 'recovery', loadChildren:()=>RecoveryModule , data: {hideFooter:true,hideNavbarAdmin:false,hideNavbar:true}},
  {path: 'recovery/:email', loadChildren:()=>RecoveryModule},
  {path: 'createusers', loadChildren:()=>CreateusersModule , data: {hideFooter:true,hideNavbarAdmin:false,hideNavbar:true}},
  
  {path: 'change/:token', loadChildren:()=>ChangeModule,  data: {hideFooter:true,hideNavbarAdmin:false,hideNavbar:true}},
  {path: 'verify/:verify_code', loadChildren:()=>VerifyModule,  data: {hideFooter:true,hideNavbarAdmin:false,hideNavbar:true}},

  //RUTAS ADMIN
  
  {path: 'perfil-admin', canActivate: [AuthGuard],loadChildren :()=>DashboardModule, data: {hideFooter:false,hideNavbarAdmin:true,hideNavbar:false}},
  {path: 'perfil-admin/contactopagina', canActivate: [AuthGuard], loadChildren :()=>ContactopaginaModule, data: {hideFooter:false,hideNavbarAdmin:true,hideNavbar:false}},
  {path: 'perfil-admin/adminconfig', canActivate: [AuthGuard], loadChildren :()=>AdminconfigModule, data: {hideFooter:false,hideNavbarAdmin:true,hideNavbar:false}},
  {path: 'perfil-admin/admincotizaciones', canActivate: [AuthGuard], loadChildren :()=>AdmincotizacionesModule, data: {hideFooter:false,hideNavbarAdmin:true,hideNavbar:false}},
  {path: 'perfil-admin/adminseguros', canActivate: [AuthGuard], loadChildren :()=>AdminsegurosModule, data: {hideFooter:false,hideNavbarAdmin:true,hideNavbar:false}},
  {path: 'perfil-admin/adminsiniestros', canActivate: [AuthGuard], loadChildren :()=>AdminsiniestrosModule, data: {hideFooter:false,hideNavbarAdmin:true,hideNavbar:false}},
  {path: 'perfil-admin/adminsiniestros/detallesiniestro/:id', canActivate: [AuthGuard], loadChildren :()=>DetallesiniestroModule, data: {hideFooter:false,hideNavbarAdmin:true,hideNavbar:false}},
  {path: 'perfil-admin/perfiles', canActivate: [AuthGuard], loadChildren :()=>PerfilesModule, data: {hideFooter:false,hideNavbarAdmin:true,hideNavbar:false}},

  {path: '**', redirectTo :'/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

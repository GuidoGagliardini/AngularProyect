import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
user:any = {};
sidebarToggled :boolean  =true;
  routes :any = [
    {link:'/perfil-admin/admincotizaciones',detail:'Cotizaciones'},
    {link:'/perfil-admin/adminseguros',detail:'Consulta Seguros'},
    {link:'/perfil-admin/adminsiniestros',detail:'Siniestros'},
    {link:'/perfil-admin/contactopagina',detail:'Consultas Sitio'},
    {link:'/perfil-admin/adminconfig',detail:'Configuracion Sitio'},
    {link:'/perfil-admin/perfiles',detail:'Perfiles'}
  ];
  constructor(private router : Router) { }

ngOnInit(){
    this.user = {
      usuario : sessionStorage.getItem('usuario')
    }
    
    
  }
//Para que se esconda donde dice usuario y contra ahora lo tengo en true para que se vea siempre 
  sidebarSwitch() {
    this.sidebarToggled = !this.sidebarToggled;
  }
logout(){
  localStorage.clear();
  sessionStorage.clear();
  this.router.navigate(['login']);
}
}

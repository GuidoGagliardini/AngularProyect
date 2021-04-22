import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  routes : any = [ 
    {link : 'seguros' , detail : 'Seguros'},
    {link : 'formSiniestro' , detail : 'Formulario de Siniestro'},
    {link : 'contacto' , detail : 'Contacto'},
    
    {link : 'login' , detail : 'Login'}

  ];

  constructor() { }

  ngOnInit() {
  }

}

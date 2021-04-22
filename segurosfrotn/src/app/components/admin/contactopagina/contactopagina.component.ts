import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/services/common/contacto/contacto.service';

@Component({
  selector: 'app-contactopagina',
  templateUrl: './contactopagina.component.html',
  styleUrls: ['./contactopagina.component.css']
})
export class ContactopaginaComponent implements OnInit {
consultas :any = [] ;
constructor(private serviceContacto: ContactoService) { }

 async ngOnInit(){
 await this.TodasConsultasAdmin();
  }
 async TodasConsultasAdmin (){
  
    let result :any  = await this.serviceContacto.contactoTodos();
    this.consultas=result.result;
    
    
  }
async borrarConsulta(id){
  await this.serviceContacto.deleteConsulta(id);
  this.TodasConsultasAdmin();
}
}

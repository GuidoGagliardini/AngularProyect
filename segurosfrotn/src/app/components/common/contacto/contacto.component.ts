import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ContactoService } from 'src/app/services/common/contacto/contacto.service';
import { SwalService } from 'src/app/services/common/swallservices.service';
import { Router } from '@angular/router';
import {mailContacto}from 'src/app/services/common/contacto/mailcontacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
form : FormGroup;
isLoaded : boolean;
 
formObj = {
  nombre_contacto :  new FormControl("",[Validators.required]),
  email_contacto :  new FormControl("",[Validators.required, Validators.email]),
  telefono_contacto : new FormControl("",[Validators.required,Validators.minLength(5)]),
  consulta_contacto : new FormControl("",[Validators.required])

}


constructor(public fb : FormBuilder,
            private contactoservice : ContactoService,
            private swalService: SwalService,
            private router : Router,
            private mailservice : mailContacto) { }



  ngOnInit(){
    this.isLoaded = false;
    this.form = new FormGroup(this.formObj);
    this.isLoaded =true;
    
  }

  async contacto (){
   
    let resp = await this.swalService.normalMessage({html : "CONSULTA ENVIADA MUCHAS GRACIAS 😁",
                                                     icon : "success"});
    let result  = await this.contactoservice.contacto(this.form.value);
    let envioMail =  await this.mailservice.mailContacto(this.form.value);
    this.form.reset();
    this.router.navigate(['home']);
  
    
  }

}

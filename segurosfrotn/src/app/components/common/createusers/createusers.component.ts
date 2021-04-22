import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PerfilesService } from 'src/app/services/admin/perfiles.service';
import { SwalService } from 'src/app/services/common/swallservices.service';

@Component({
  selector: 'app-createusers',
  templateUrl: './createusers.component.html',
  styleUrls: ['./createusers.component.css']
})
export class CreateusersComponent implements OnInit {
formCreate : FormGroup ;
isLoaded: boolean ;
message: string ;
formCreateObj={
  usuario : new FormControl("",[Validators.required]),
  email : new FormControl("",[Validators.email]),
  password : new FormControl("",[Validators.maxLength(8),Validators.minLength(4)]),
  repeatPassword:  new FormControl("",[Validators.maxLength(8),Validators.minLength(4)])
}
  constructor(private swalService : SwalService,
              private router : Router,
              private service : PerfilesService) { }

 async ngOnInit(){
    this.isLoaded = false;
    this.createForm();
    this.isLoaded =true;
    
    

  }
  createForm(){
    this.formCreate = new FormGroup(this.formCreateObj);
  }
   async validarPass(){
    let password1 = this.formCreateObj.password.value;
    let password2 = this.formCreateObj.repeatPassword.value;
    if(password1==password2){
      let resp = await  this.swalService.confirmMessage({text:"ENVIAR FORMULARIO?"})
      if(resp.isConfirmed){
        let result =await this.service.createusers(this.formCreate.value);
        console.log(result)
        if(result===false){
          this.swalService.userExistent({html:"Email Ya Registrado",icon:"error"})
          this.router.navigate(["/createusers"])
        }else {
          this.swalService.normalMessage({icon:'success',html:'Revise su email y active su cuenta!ℹ'});
          this.router.navigate(['login']);
          
        }
           }
    }else {
      this.message="Las contraseñas deben coincidir";
    }

    

  }


}

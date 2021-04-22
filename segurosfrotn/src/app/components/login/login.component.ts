import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SwalService } from 'src/app/services/common/swallservices.service';
import { AuthServiceSocial } from 'src/app/services/socialauth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
constructor(private authService: AuthService, 
            private router : Router,
            private swalService : SwalService,
            public auth0:AuthServiceSocial )
             { }



           
form : FormGroup;
isLoaded : boolean;

formObj = {
  usuario: new FormControl('',[Validators.required]),
  password : new FormControl('',[Validators.required])
}

ngOnInit(){
    this.isLoaded = false ;
    this.form = new FormGroup(this.formObj);
    this.isLoaded =! this.isLoaded;
  }
  async auth (){  

  const {JWT,permiso,usuario} : any   = await this.authService.login(this.form.value);
 
  

  JWT ? (sessionStorage.setItem('JWT' ,JWT),
        sessionStorage.setItem('permiso', permiso),
        sessionStorage.setItem('usuario', usuario ),
        this.router.navigate(['perfil-admin']))
      :
        (this.form.reset() ,
        this.swalService.errorMessage({html : "USUARIO O PASSWORD INCORRECTO <br><h1>⛔</h1> ",
                                     icon:"error"}), console.log('Datos incorrectos') )

   }


     
  }



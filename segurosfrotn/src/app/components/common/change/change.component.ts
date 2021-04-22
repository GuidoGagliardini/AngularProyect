import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ChangeService } from 'src/app/services/common/change.service';
import { SwalService } from 'src/app/services/common/swallservices.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {
  formChanger : FormGroup;
  isLoaded : boolean;
  token : any;
  user: any ;
  message : string;

  constructor(
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private service : ChangeService,
    private swalService : SwalService
  ) { }

  createChangerForm() {
    this.formChanger = new FormGroup({
      password : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      repeatPassword : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });
  }

  async ngOnInit() {
    this.token = this.activatedRoute.snapshot.params.token;
    
    this.user = await this.service.getIdByToken(this.token);
    
    this.isLoaded = false;
    this.createChangerForm();
    this.isLoaded = true;
    
  }

  async changerPassword(){
    
    if(this.formChanger.get('password').value == this.formChanger.get('repeatPassword').value) {
      const userUpdated = {
        id_u:this.user.id[0].id_u,
        password: this.formChanger.get('password').value
      }
      await this.service.changePassword(userUpdated);
      this.swalService.normalMessage({icon:'success',html:'CONTRASEÑA CAMBIADA 👌'});
      this.formChanger.reset();
      this.router.navigate(['/home']);
    } else {
      this.message = "Error to change the password!";
    }
  }
  

}

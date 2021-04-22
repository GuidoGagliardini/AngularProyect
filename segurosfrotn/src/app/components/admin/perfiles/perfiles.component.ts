import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PerfilesService } from 'src/app/services/admin/perfiles.service';
import { SwalService } from 'src/app/services/common/swallservices.service';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {
users : any = [];
editarToggled: boolean = false;
FormEdit : FormGroup;
deleteToggled: boolean =false;

FormEditObj={
  usuario : new FormControl("",[Validators.required]),
  password : new FormControl("",[Validators.required]),
  email : new FormControl("",[Validators.required]),
  permisos: new FormControl("", [Validators.required])
}

constructor( private service : PerfilesService,
             private swalService : SwalService)
     { }

 async ngOnInit(){
   await this.allUsers();
   this.FormEdit = new FormGroup(this.FormEditObj);

  }

 async allUsers (){
    let result: any =  await this.service.allUsers();
    this.users = result.usuarios;
    console.log(this.users)
    
  }
  editar(){
    this.editarToggled=!this.editarToggled;
  }
  delete(){
    this.deleteToggled=!this.deleteToggled;
  }
  async editUsers(){
    let result: any =  await this.service.allUsers();
   
    await this.service.editUsers(this.FormEdit.value);

  }
  async deleteusers(id){
    let resp = await this.swalService.confirmMessage({icon:'question', text:'ELIMINAR USUARIO??'});
    if(resp.isConfirmed){
      let result = await this.service.deleteuser(id);
      this.swalService.normalMessage({icon:'success', html: 'Usuario eliminado'});
      this.allUsers();
    }else {
      this.swalService.errorMessage({icon:'danger', html:'error!'});
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { SegurosService } from 'src/app/services/common/seguros.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SwalService } from 'src/app/services/common/swallservices.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-seguros-single',
  templateUrl: './seguros-single.component.html',
  styleUrls: ['./seguros-single.component.css']
})
export class SegurosSingleComponent implements OnInit {
id : any ;
seguro :any = {};
loadinfo :boolean =false;
form : FormGroup;
isLoaded : boolean ;
obj : any ;
formObj ={
 email : new FormControl('', [Validators.email])
}
  constructor(
    private service : SegurosService,
    private activatedroute : ActivatedRoute,
    private swalService : SwalService,
    private mailService : SegurosService,
    private router : Router
   
  ) { }
  

  async ngOnInit () {
    this.id= this.activatedroute.snapshot.params.id;
    console.log(`se buscara este seguro : ${this.id}`);
    await this.getseguroSingle(this.id);
    this.isLoaded =false;
    this.form= new FormGroup(this.formObj);
    this.isLoaded =true;
   
    
    
  }
 
  async getseguroSingle(id){
      let result  :any  = await this.service.seguroSingle(id);
      this.seguro= result.segurosingle[0];
     

  }

    
    
loadInfo(){
  this.loadinfo=!this.loadinfo;
 }

 mailseguroSingle(){
let result :any = this.service.mailseguroSingle(this.form.value,this.activatedroute.snapshot.params.id);

this.swalService.normalMessage({icon:'success', html:"Consulta enviada ! Gracias 😁"});
this.router.navigate(['seguros']);
    
  }

}

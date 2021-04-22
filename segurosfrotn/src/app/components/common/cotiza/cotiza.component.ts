import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {Router} from '@angular/router';
import {SwalService} from  './../../../services/common/swallservices.service'
import { from } from 'rxjs';
import { CotizaService } from 'src/app/services/common/cotiza.service';



/**aca tendria que poner un swalService para que envia un mensaje una vez apretado el boton de cotiza */
@Component({
  selector: 'app-cotiza',
  templateUrl: './cotiza.component.html',
  styleUrls: ['./cotiza.component.css']
})
export class CotizaComponent implements OnInit {
 isloaded :boolean ;
 form: FormGroup;
 formMessege: string = "";
 formObj = {
   nombre_cot: new FormControl ("", [Validators.required]),
   dni_cot: new FormControl ("", [Validators.required]),
   fechaNac_cot: new FormControl ("", [Validators.required]),
   localidad_cot: new FormControl ("", [Validators.required]),
   
   marca_cot: new FormControl ("", [Validators.required]),
   modelo_cot: new FormControl ("", [Validators.required]),
   ano_cot: new FormControl ("", [Validators.required]),
   puertas_cot : new FormControl("",[Validators.required]),
   pago_cot : new FormControl("",[Validators.required]),
   email_cot : new FormControl("",[Validators.required])
 }

constructor(private Swal : SwalService, 
            private cotizaService : CotizaService,
            private router : Router) { }
 

ngOnInit(){
    this.isloaded = false;
    this.form = new FormGroup(this.formObj);
    this.isloaded = !this.isloaded;
  }
  
  async cotiza(){
    
    let resp = await this.Swal.confirmMessage({text : "ENVIAR COTIZACION?"});
    if (resp.isConfirmed){
      //ACA VENDRIA .LENGTH, ES DECIR QUE SI CARGA UN MAIL , MANDA LA FUNCION, PERO AHORA ME 
          await this.cotizaService.cotiza(this.form.value);

          await this.Swal.normalMessage({icon: 'success',
                                       html: "CONSULTA ENVIADA. MUCHAS GRACIAS 😊"});
    }else{
      await this.Swal.errorMessage({icon: 'error',html: 'error en la consulta, vuelva a intentarlo'})
    }
    this.form.reset();
    this.router.navigate(['home']);

  }

}

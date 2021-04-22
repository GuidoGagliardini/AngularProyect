import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NgForOfContext } from '@angular/common';
import { SiniestroService } from 'src/app/services/common/formsiniestro/siniestro.service';
import { SwalService } from 'src/app/services/common/swallservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-siniestro',
  templateUrl: './form-siniestro.component.html',
  styleUrls: ['./form-siniestro.component.css']
})
export class FormSiniestroComponent implements OnInit {
form : FormGroup ;
previewUrl:any  ;
selectedFile : File ;
isLoaded : boolean ; 
// usuario : string ; // CUANDO ME ANDE EL JWT ESTO TIENE QUE FUNCIONAR!!!!
formObject = {

  fecha_sin: new FormControl("", [Validators.required]),
  hora_sin:new FormControl("", [Validators.required]) ,
  calle_sin: new FormControl("", [Validators.required]),
  entrecalle_sin:new FormControl("", [Validators.required]) ,
  entrecalle2_sin:new FormControl("", [Validators.required]),
  localidad_sin:new FormControl("", [Validators.required]),
  formaocurrencia_sin: new FormControl("", [Validators.required]),
  danos_sin :new FormControl("", [Validators.required]),
  asegurado_sin :new FormControl("", [Validators.required]),
  patente_sin :new FormControl("", [Validators.required]),
  nombretercero_sin :new FormControl("", [Validators.required]),
  dnitercero_sin :new FormControl("", [Validators.required]),
  autotercero_sin: new FormControl("", [Validators.required]),
  segurotercero_sin:new FormControl("", [Validators.required]),
  danotercero_sin:new FormControl("", [Validators.required]),
  imagen_sin:new FormControl('')
}

  constructor(private serviceSiniestro: SiniestroService,
              private swalService :SwalService,
              private router : Router) { }

  ngOnInit()  {
  this.isLoaded = false;
  this.form = new FormGroup(this.formObject);
  // this.usuario = sessionStorage.getItem("usuario"); // CUANDO ME ANDE EL JWT ESTO TIENE QUE FUNCIONAR!!!!
  this.isLoaded = !this.isLoaded;
  console.log(this.form.value)
  }

  onFileSelected(event){
    const reader =  new FileReader();
    const files = event.target.files;
    if (files && files.length){
      this.selectedFile= files[0];
      reader.onload = (e) => {
        
          this.previewUrl = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
  }
  }
  async upload (){
    //carga de datos al back
    const fd =  new FormData();
    const {fecha_sin,
          hora_sin, 
          calle_sin, 
          entrecalle_sin,
          entrecalle2_sin,
          localidad_sin,
          formaocurrencia_sin,
          danos_sin,
          asegurado_sin,
          patente_sin, 
          nombretercero_sin,
          dnitercero_sin,
          autotercero_sin,
          segurotercero_sin,
          danotercero_sin
           } = this.form.value;

    fd.append('fecha_sin', fecha_sin);
    fd.append('hora_sin', hora_sin);
    fd.append('calle_sin', calle_sin);
    fd.append('entrecalle_sin', entrecalle_sin);
    fd.append('entrecalle2_sin', entrecalle2_sin);
    fd.append('localidad_sin', localidad_sin);
    fd.append('formaocurrencia_sin', formaocurrencia_sin);
    fd.append('danos_sin', danos_sin);
    fd.append('asegurado_sin', asegurado_sin);
    fd.append('patente_sin', patente_sin);
    fd.append('nombretercero_sin', nombretercero_sin);
    fd.append('dnitercero_sin', dnitercero_sin);
    fd.append('autotercero_sin', autotercero_sin);
    fd.append('segurotercero_sin', segurotercero_sin);
    fd.append('danotercero_sin', danotercero_sin);
    fd.append('imagen_sin', this.selectedFile, this.selectedFile.name);
    

    let result = await this.serviceSiniestro.siniestro(fd);
    
    this.swalService.normalMessage({icon:'success', html:'Hemos recibido su informacion, en breves nos comunicamos con usted👍'});
    this.form.reset();
    this.router.navigate(['home']);

  }

}

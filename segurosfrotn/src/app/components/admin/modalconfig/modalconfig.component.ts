import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-modalconfig',
  templateUrl: './modalconfig.component.html',
  styleUrls: ['./modalconfig.component.css']
})
export class ModalconfigComponent implements OnInit {
  @ViewChild("myModalConf",{static: false}) myModalConf : TemplateRef<any>;
  @ViewChild("descripcion", {static:false}) descripcion : TemplateRef<any>;
  constructor(private modalService : NgbModal) { 
  }
  formEditSeguros : FormGroup;
 
  formEditSegurosObj={
    descripcion_s : new FormControl('',[Validators.required]),
    nombre_s: new FormControl('',[Validators.required]),
    titulo_s: new FormControl('',[Validators.required]),
    imagen_s: new FormControl('',[Validators.required])
  }

  ngOnInit() {
    this.formEditSeguros = new FormGroup(this.formEditSegurosObj);
  }
  mostrarModalConf() {
    this.modalService.open(this.myModalConf).result.then( r => {
      console.log("Tu respuesta ha sido: " + r);
      
    }, error => {
      console.log(error);
    });
  }
 cambios (){
  this.modalService.open(this.descripcion).result.then(r => {
    console.log("Aca llegamos a descripcion" , r)
  },error =>{
    console.log(error)
  })
}

}

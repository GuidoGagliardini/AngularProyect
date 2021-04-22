import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SegurosService } from 'src/app/services/common/seguros.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'
import {ModalconfigComponent} from './../modalconfig/modalconfig.component';


@Component({
  selector: 'app-adminseguros',
  templateUrl: './adminseguros.component.html',
  styleUrls: ['./adminseguros.component.css']
})
export class AdminsegurosComponent implements OnInit {
  @ViewChild("keySeguro", {static: false }) keySeguro ;
  constructor(private segurosservice : SegurosService,
              private modalService : NgbModal
            ) { }
  seguros : any = [];
  
  
  async ngOnInit   ()   {
    await this.settiingSeguros()
  }

 settiingSeguros = async  ()=>{
  const result : any  = await this.segurosservice.segurosall();
  this.seguros = result.seguros;
  
}
modalEdit = async  (id) =>{
 const modal = await this.modalService.open(ModalconfigComponent).result;
 console.log(modal);
 }

}

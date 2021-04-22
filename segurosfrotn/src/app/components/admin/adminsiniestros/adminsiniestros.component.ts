import { Component, OnInit } from '@angular/core';
import { SiniestroService } from 'src/app/services/common/formsiniestro/siniestro.service';

@Component({
  selector: 'app-adminsiniestros',
  templateUrl: './adminsiniestros.component.html',
  styleUrls: ['./adminsiniestros.component.css']
})
export class AdminsiniestrosComponent implements OnInit {
adminsiniestros: any = []
  constructor(private siniestroService : SiniestroService) { }

  ngOnInit() {
    this.siniestros();
  }
async siniestros (){
  let result :any = await this.siniestroService.adminsiniestros();
  this.adminsiniestros = result.siniestros;
  
}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiniestroService } from 'src/app/services/common/formsiniestro/siniestro.service';

@Component({
  selector: 'app-detallesiniestro',
  templateUrl: './detallesiniestro.component.html',
  styleUrls: ['./detallesiniestro.component.css']
})
export class DetallesiniestroComponent implements OnInit {
id:any;
siniestro:any = {};
  constructor(private router: Router,
              private activatedRoute : ActivatedRoute,
              private serviceDetalleSiniestro : SiniestroService) { }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.params.id;
    this.getdetallesiniestro(this.id);
    
  }

  async getdetallesiniestro(id){
    let result :any = await this.serviceDetalleSiniestro.detallesiniestro(id);
    this.siniestro = result.siniestro;
    console.log(result);
  }

}

import { Component, OnInit } from '@angular/core';
import { CotizaService } from 'src/app/services/common/cotiza.service';

@Component({
  selector: 'app-admincotizaciones',
  templateUrl: './admincotizaciones.component.html',
  styleUrls: ['./admincotizaciones.component.css']
})
export class AdmincotizacionesComponent implements OnInit {
cotizaciones : any = [];
  constructor(private service : CotizaService) { }

  ngOnInit(){
    this.todas();
  }
  async todas (){
    let result :any = await this.service.todascotizaciones();
    this.cotizaciones = result.result;
    console.log(result)
  }

}

import { Component, OnInit } from '@angular/core';
import { SegurosService } from 'src/app/services/common/seguros.service';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.css']
})
export class SegurosComponent implements OnInit {
seguros : any = [];
  constructor(private service : SegurosService) {}
  
async ngOnInit() {
    await this.segurostodos();
    
  }
  async segurostodos (){
    let result : any  = await this.service.segurosall();
    this.seguros = result.seguros;
  }

}

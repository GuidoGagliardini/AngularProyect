import { Component, OnInit } from '@angular/core';
import { RecoveryService } from 'src/app/services/common/recovery.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SwalService } from 'src/app/services/common/swallservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

  formRecovery : FormGroup;
  isLoaded : boolean;
  constructor(private service : RecoveryService,
              private swalService :SwalService,
              private router : Router) { }
  createFormRecovery() {
    this.formRecovery = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit() {
    this.isLoaded = false;
    this.createFormRecovery();
    this.isLoaded = true;
  }
  async recoveryPassword(){

    const { email } = this.formRecovery.value;
    await this.service.recovery(email);
    this.formRecovery.reset();
    this.swalService.normalMessage({icon:'info',html:'<h3>Se envio un mail a su casilla</h3>'});
    this.router.navigate(['login']);


  }

}

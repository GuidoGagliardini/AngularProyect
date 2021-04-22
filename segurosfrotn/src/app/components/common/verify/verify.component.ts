import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalService } from 'src/app/services/common/swallservices.service';
import { VerifyService } from 'src/app/services/common/verify.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
verify_code: any ;
useractivated : any; 
  constructor(private sweetAlert : SwalService,
              private router : Router,
              private service : VerifyService,
              private activitedRoute: ActivatedRoute) { }

async  ngOnInit() {
  this.verify_code = this.activitedRoute.snapshot.params.verify_code;
  

  this.service.verifyCode(this.verify_code);
  let result =  await  this.sweetAlert.confirmMessage({icon:'success'});
    if(result.isConfirmed){
      this.router.navigate(['home']);
    }else{
      this.sweetAlert.errorMessage({html:"ERROR EN ACTIVACION"});
      this.router.navigate(['login']);
    }

  }

}

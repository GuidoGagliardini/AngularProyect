import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyService extends BaseService {

verifyCode(verify_code){
  try{
    this.setEndPoint(`verify/${verify_code}`)
    return this.get();
  }catch(error){
    throw error;
  }
}
  
}

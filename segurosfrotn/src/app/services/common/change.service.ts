import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ChangeService  extends BaseService{
  getIdByToken(token){

    try{
        this.setEndPoint(`change/${token}`);
        return this.get();
    }catch(error){
      throw error;
    }
  }
  
changePassword(obj){
  try{
        this.setEndPoint(`change`);
        return this.post(obj);
    }catch(error){
      throw error;
    }
  }
  
}

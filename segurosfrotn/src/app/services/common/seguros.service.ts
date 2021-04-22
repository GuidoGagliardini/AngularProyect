import { Injectable, ErrorHandler } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class SegurosService extends BaseService{
   segurosall (){
    try{
      this.setEndPoint('seguros');
      return this.get();
    }catch (error){
      throw error;
    }
  }
  seguroSingle (id){
    try{
      this.setEndPoint(`seguros/seguros-single/${id}`);
      return this.get();
    }catch (error){
      throw error;
    }
  }
  mailseguroSingle(obj,id){
    try{
      this.setEndPoint(`mailseguros/${id}`);
      return this.post(obj)
    }catch(error){
      throw error;

    }
  }
}


import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService  extends BaseService{

  allUsers (){
    try{
      this.setEndPoint('users');
      return this.get();
    }catch(error){
      throw error;
    }
  }
  editUsers (obj){
    try{
      this.setEndPoint(`users/edit`)
      return this.put(obj);
    }catch(error){
      throw error;
    }
  }
  createusers (obj){
    try{
      this.setEndPoint(`users`)
      return this.post(obj);
    }catch(error){
      throw error;
    }
  }
  deleteuser (id){
    try{
      this.setEndPoint(`users/${id}`);
      console.log('se envia a ' + `${this.urlServer}${this.endpoint}`);
      return this.delete();
    }catch(error){
      throw error;
    }
  }
 
}

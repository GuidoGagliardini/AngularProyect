import { BaseService } from "../../base.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SiniestroService extends BaseService {
  siniestro(obj) {
    try {
      this.setEndPoint('siniestro');
      console.log(`${this.urlServer}${this.endpoint}`);
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }
  adminsiniestros() {
    try {
      this.setEndPoint('adminsiniestros');
      console.log(`${this.urlServer}${this.endpoint}`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }
  detallesiniestro(id){
    try{
      this.setEndPoint(`adminsiniestros/${id}`);
      console.log(`${this.urlServer}${this.endpoint}${id}`);
      return this.get();
    }catch(error){
      throw error;
    }
  }
}

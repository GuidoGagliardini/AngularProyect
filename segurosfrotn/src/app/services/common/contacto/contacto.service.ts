import { BaseService } from "../../base.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ContactoService extends BaseService {
  contacto(obj) {
    try {
      this.setEndPoint('contacto');
      console.log('se envia a ' + `${this.urlServer}${this.endpoint}`);
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }
 contactoTodos() {
    try {
      this.setEndPoint('contacto/consultasAdmin');
      console.log('se envia a ' + `${this.urlServer}${this.endpoint}`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }

  deleteConsulta(id) {
    try {
      this.setEndPoint(`contacto/delete/${id}`);
      console.log('se envia a ' + `${this.urlServer}${this.endpoint}`);
      return this.delete();
    } catch (error) {
      throw error;
    }
  }
}

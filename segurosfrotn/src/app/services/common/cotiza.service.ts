import { BaseService } from "./../base.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CotizaService extends BaseService {
  cotiza(obj) {
    try {
      this.setEndPoint('cotMail');
      console.log(`${this.urlServer}${this.endpoint}`);
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }

  todascotizaciones() {
    try {
      this.setEndPoint('admincotizaciones');
      console.log(`${this.urlServer}${this.endpoint}`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }
}

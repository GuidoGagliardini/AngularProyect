import { BaseService } from "../../base.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class mailContacto extends BaseService {
  mailContacto(obj) {
    try {
      this.setEndPoint('mailContacto');
      console.log(`${this.urlServer}${this.endpoint}`);
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }
}

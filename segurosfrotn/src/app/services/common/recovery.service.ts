import { BaseService } from "./../base.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RecoveryService extends BaseService {
  recovery(email) {
    try {
      this.setEndPoint(`recovery/${email}`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }
}


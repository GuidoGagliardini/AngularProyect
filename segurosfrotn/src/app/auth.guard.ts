import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    let status = false;
    sessionStorage.getItem("JWT") ? (status = true) : (status = false);
    
    return status;
  }
 
}

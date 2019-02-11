import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppServicesService } from './app-services.service';
@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(private router:Router,private appservice:AppServicesService) {}  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return true;
    // alert("Unauthorized Access,Redirecting to Home");  
    // this.router.navigate(['login']);  
    //  return false;
    if(this.appservice.isLoggednIn()){
      return true;
    }else{
      this.router.navigate(["login"]);
      return false;
    } 
  }
} 
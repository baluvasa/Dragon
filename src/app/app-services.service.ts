import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AppServicesService {
  loged:any;
  constructor(private route: Router) { }
  setLogedinfo(value){        
    this.loged=localStorage.setItem('logeduser',value);
  }

  getToken() {
    return localStorage.getItem("logeduser")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("logeduser");
    this.route.navigate(["login"]);
  }
}

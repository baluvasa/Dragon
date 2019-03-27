import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AppServicesService {
  loged:any;
  dates={};
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
  setdates(startdate,enddate){
this.dates["startdate"]=startdate;
this.dates["enddate"]=enddate;
  }
  getdates(){
return this.dates;
  }
}

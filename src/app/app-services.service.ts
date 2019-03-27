import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AppServicesService {
  loged:any;
  dates={};
  billinginformation={};
  constructor(private route: Router) { }
  setLogedinfo(value){        
    this.loged=localStorage.setItem('logeduser',value);
  }

  setinfo(){
    this.billinginformation
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
  setdates(startdate,enddate,contract,pid,customername,quote){
this.dates["startdate"]=startdate;
this.dates["enddate"]=enddate;
this.dates["contract"]=contract;
this.dates["pid"]=pid;
this.dates["customername"]=customername;
this.dates["quote"]=quote;

  }
  getdates(){
return this.dates;
  }
  
}

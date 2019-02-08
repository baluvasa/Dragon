import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {
  loged:any;
  constructor() { }
  getLogedinfo(){
    return this.getLogedinfo;
  }
  setLogedinfo(value){    
    
    this.loged=localStorage.setItem('logeduser',value);
  }
}

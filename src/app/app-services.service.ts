import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {
  loged:any;
  constructor() { }
  setLogedinfo(value){        
    this.loged=localStorage.setItem('logeduser',value);
  }
}

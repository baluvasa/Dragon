import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
    
@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  menuinvoke = new EventEmitter();    
  subsVar: Subscription;    
    
  constructor() { }    
    
  menuinvokefunction() {    
    this.menuinvoke.emit();    
  }    
}
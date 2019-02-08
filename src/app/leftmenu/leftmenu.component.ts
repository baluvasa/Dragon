import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../app-services.service';
import { EventEmitterService } from '../event-emitter.service';
@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.scss']
})
export class LeftmenuComponent implements OnInit {
  logedas:any;
  constructor(private ass:AppServicesService,private eventEmitterService: EventEmitterService) { }
  ngOnInit() {

    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      menuinvoke.subscribe((name:string) => {    
        this.tun();    
      });    
    } 
    // this.tun();
  }
  tun(){
    this.logedas= localStorage.getItem('logeduser');    
  }
}

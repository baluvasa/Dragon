import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';
import { AppLink } from '../app-link';
@Component({
  selector: 'app-prodec',
  templateUrl: './prodec.component.html',
  styleUrls: ['./prodec.component.scss']
})
export class ProdecComponent implements OnInit {
role:any;
constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit() {
    this.eventEmitterService.menuinvokefunction(); 
    if(localStorage.getItem('logeduser')=='ADMIN'){
      this.role=true;
  }
  }
}

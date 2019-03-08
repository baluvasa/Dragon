import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';
import { AppLink } from '../app-link';
@Component({
  selector: 'app-pronov',
  templateUrl: './pronov.component.html',
  styleUrls: ['./pronov.component.scss']
})
export class PronovComponent implements OnInit {
  role:any;
  constructor(private eventEmitterService: EventEmitterService) { }
  

  ngOnInit() {
    this.eventEmitterService.menuinvokefunction(); 
    if(localStorage.getItem('logeduser')=='ADMIN'){
      this.role=true;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';
import { AppLink } from '../app-link';
@Component({
  selector: 'app-projectinfo-monthly',
  templateUrl: './projectinfo-monthly.component.html',
  styleUrls: ['./projectinfo-monthly.component.scss']
})
export class ProjectinfoMonthlyComponent implements OnInit {
  role:any;

poyearmonth = AppLink.onOpenCalendar; 
  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit() {
    this.eventEmitterService.menuinvokefunction(); 
    if(localStorage.getItem('logeduser')=='ADMIN'){
      this.role=true;
  }
  }
     
  onOpenCalendar(selecteddate){ 
   
    this.poyearmonth(selecteddate);
}
}

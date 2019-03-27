import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';
import { AppLink } from '../app-link';
import { AppServicesService } from '../app-services.service';
@Component({
  selector: 'app-projectinfo-monthly',
  templateUrl: './projectinfo-monthly.component.html',
  styleUrls: ['./projectinfo-monthly.component.scss']
})
export class ProjectinfoMonthlyComponent implements OnInit {
  role:any;
  maxdate:any;
  mindate:any;
  project_years:any;
  
  poyearmonth = AppLink.onOpenCalendar; 
  constructor(private eventEmitterService: EventEmitterService,private appservice:AppServicesService) { }
  
  ngOnInit() {
    this.eventEmitterService.menuinvokefunction(); 
    if(localStorage.getItem('logeduser')=='ADMIN'){
      this.role=true;
    }
    this.postartenddates();
  }
  
  
  projectmaxdate(max){
    
    this.maxdate=new Date(max);
  }
  projectmindate(min){
    this.mindate=new Date(min);
    
  }
  
  postartenddates(){
    this.project_years=this.appservice.getdates();
    this.projectmaxdate(this.project_years.startdate);
   this.projectmindate(this.project_years.enddate);
  }
  
  
  onOpenCalendar(selecteddate){ 
    this.poyearmonth(selecteddate);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { EventEmitterService } from '../event-emitter.service';
import { AppLink } from '../app-link';

@Component({
  selector: 'app-fxrates',
  templateUrl: './fxrates.component.html',
  styleUrls: ['./fxrates.component.scss']
})
export class FxratesComponent implements OnInit  {
// Initialized to specific date (09.10.2018).
//09-10-2019
//public model: any = { date: { year: 2018, month: 10, day: 9 } };
  leaveform: FormGroup;
  addleaveform: FormGroup;
  error:any;
  projects:any;
  project_years:any;
  associates:any;
  leavelists:any;
  role:any;
  myDatePickerOptions=AppLink.myDatePickerOptions;
  ip=AppLink.baseURL;
  dtOptions = AppLink.DTOptions; 
  constructor(private formBuilder: FormBuilder,private eventEmitterService: EventEmitterService) { }

  ngOnInit() {
    this.eventEmitterService.menuinvokefunction();
    if(localStorage.getItem('logeduser')=='admin'){
      this.role=true;
    }

    this.projects=[      
      {name:'USD',country:'US Dollar'},
      {name:'JPY',country:'Yen'},
      {name:'EUR',country:'Euro'},
    ];
    this.project_years=[
      {year_month:'10'},
      {year_month:'30'},
      {year_month:'15'},
      {year_month:'45'}  
    ];
    this.associates=[
      {associateid:'12-Jan-18'},
      {associateid:'03-Mar-18'},
      {associateid:'09-Sep-18'},
      {associateid:'21-Dec-18'}  
    ];
    this.leaveform = new FormGroup({
      projectname:new FormControl('',{}), 
      associatesid:new FormControl('',{})    
    })
    this.addleaveform = new FormGroup({
      modalprojectname:new FormControl('',{
        validators: [Validators.required]
      })
    })
  
  }
  nodata(){
    this.error="No Data Found";
}
exception(){
    this.error="Exception has occurred while Fetching the Data";
}
badrequest(){
    this.error="Bad Request";
}
searchleaves(){
  this.leavelists=[
    
    {sno:'1',projectname:'USD -US Doller',associateid:'16-Jan-2019',associatename:'0.011545'},
    {sno:'2',projectname:'USD -US Doller',associateid:'17-Jan-2019',associatename:'0.010546'},
    {sno:'3',projectname:'USD -US Doller',associateid:'18-Jan-2019',associatename:'0.012015'},
    {sno:'4',projectname:'JPY - Yen',associateid:'16-Jan-2019',associatename:'0.650000'},
    {sno:'5',projectname:'JPY - Yen',associateid:'17-Jan-2019',associatename:'0.651000'},
    {sno:'6',projectname:'JPY - Yen',associateid:'18-Jan-2019',associatename:'0.651250'},    
    {sno:'7',projectname:'EUR - Euro',associateid:'16-Jan-2019',associatename:'0.012000'},
    {sno:'8',projectname:'EUR - Euro',associateid:'17-Jan-2019',associatename:'0.012900'},    
    {sno:'9',projectname:'EUR - Euro',associateid:'18-Jan-2019',associatename:'0.015000'},
  ];
}
deletedata(){
  if (confirm("Do you want to delete the FX Rate?")) {
    alert("Data Deleted Successfully.")
  } 
}

onSubmit(leaveform){
console.log(leaveform)
console.log(leaveform.associatesid.formatted)
}
}

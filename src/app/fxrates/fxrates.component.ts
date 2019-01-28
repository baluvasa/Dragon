import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';


@Component({
  selector: 'app-fxrates',
  templateUrl: './fxrates.component.html',
  styleUrls: ['./fxrates.component.scss']
})
export class FxratesComponent implements OnInit  {
  error:any;
  list:any;  
  holidayform:FormGroup;
  projects:any;
  years:any;
  project=null;
  edit=0;
  constructor(private formBuilder: FormBuilder) { 
  }
  
  ngOnInit() {
    
    this.projects =[
      {projectname:"proj1"},
      {projectname:"proj2"},
      {projectname:"proj3"},
      {projectname:"proj4"}
    ];
    this.years =[
      {years:"2018"},
      {years:"2018"},
      {years:"2019"},
      {years:"2020"}
    ];


    this.holidayform = new FormGroup({
      project:new FormControl('',{
        validators: [Validators.required]
      })
    })
  }
  
  getData(){    
    this.list = [
      {sno:1,Projectname:'abc1',Year:2018,days:21},
      {sno:2,Projectname:'abc2',Year:2018,days:21},
      {sno:3,Projectname:'abc3',Year:2018,days:21},
      {sno:4,Projectname:'abc4',Year:2018,days:21},
      {sno:5,Projectname:'abc5',Year:2018,days:21},
    ];
    
  }
  errordata() {
    this.error = 'no data found';
  }
  errorexceptiondata() {
    this.error = 'Exception has occurred while fetching holiday details';
  }
}

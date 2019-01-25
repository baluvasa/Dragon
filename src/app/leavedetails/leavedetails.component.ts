import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';
@Component({
  selector: 'app-leavedetails',
  templateUrl: './leavedetails.component.html',
  styleUrls: ['./leavedetails.component.scss']
})
export class LeavedetailsComponent implements OnInit {
  leaveform: FormGroup;
  projects:any;
  project_years:any;
  associates:any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.projects=[
      {name:'project A'},
      {name:'project B'},
      {name:'project C'},
      {name:'project D'}
    ];
    this.project_years=[
      {year_month:'Jan-2018'},
      {year_month:'Feb-2018'},
      {year_month:'Mar-2018'},
      {year_month:'Apr-2018'}  
    ];
    this.associates=[
      {associateid:'505050'},
      {associateid:'505051'},
      {associateid:'505052'},
      {associateid:'505053'}  
    ];
    this.leaveform = new FormGroup({
      projectname:new FormControl('',{}),
      projectyear:new FormControl('',{}),    
      associatesid:new FormControl('',{})    
    })

  }

}

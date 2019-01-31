import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-accountcategory1',
  templateUrl: './accountcategory1.component.html',
  styleUrls: ['./accountcategory1.component.scss']
})
export class Accountcategory1Component implements OnInit {
  leaveform: FormGroup;
  addleaveform: FormGroup;
  error:any;
  projects:any;
  project_years:any;
  associates:any;
  leavelists:any;
  dtOptions: any = {};
  role:any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    if(localStorage.getItem('logeduser')=='admin'){
      this.role=true;
    }

    this.projects=[
      {name:'GE Industrial'},
      {name:'GE INDIA EXPORTS PVT LTD'},
      {name:'GE Oil & Gas'},
      {name:'GE P&W'},
      {name:'GE Packaged Power'},
      {name:'GE Ticketless'}
    ];
    this.project_years=[
      {year_month:'10'},
      {year_month:'30'},
      {year_month:'15'},
      {year_month:'45'}  
    ];
    this.associates=[
      {associateid:'GE Ticketless'},
      {associateid:'GE P&W'},
      {associateid:'GE Oil & Gas  '},
      {associateid:'GE Turbines'}  
    ];
    this.leaveform = new FormGroup({
      projectname:new FormControl('',{}),
      projectyear:new FormControl('',{}),    
      associatesid:new FormControl('',{})    
    })
    this.addleaveform = new FormGroup({
      modalprojectname:new FormControl('',{
        validators: [Validators.required]
      })
    })
   
    this.dtOptions = {
        dom: 'Bfrtip',
        lengthMenu: [
            [ 10, 25, 50, -1 ],
            [ '10 rows', '25 rows', '50 rows', 'Show all' ]
        ],
        pagingType: 'full_numbers',
        buttons: [
          'pageLength',
          'colvis',
          'excel'
        ]
      };   
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
    {sno:'1',associatename:'GE Appliances', associateid:"GE Ticketless",loc:'QMS9645008',sdate:'0000032951893',edate:"TML19S75A51"},
    {sno:'1',associatename:'GE P&W-B', associateid:"GE INDIA EXPORTS PVT LTD",loc:'KMS9645009',sdate:'0000063951811', edate:"TML20S75Q72"},
    {sno:'1',associatename:'GE Power', associateid:"GE Oil & Gas ",loc:'GMS9645005',sdate:'0000023295133', edate:"TML19S75A51"},
    {sno:'1',associatename:'GE Turbine', associateid:"GE Amphenol ",loc:'KMS6645008',sdate:'0000013295156', edate:"TML30S75W93"},
    {sno:'1',associatename:'GE Industrial', associateid:"Metso ",loc:'QMS9645008',sdate:'0000032951893', edate:"TML22S75A39"},
    {sno:'1',associatename:'GE ', associateid:"VL00591001",loc:'GE Packaged Power ',sdate:'0000013295159', edate:"TML22S75A34"},
    {sno:'1',associatename:'GE Appliances', associateid:"Metso ",loc:'KMS6645008',sdate:'0000063295180', edate:"TML22S75A35"},
    {sno:'1',associatename:'GE P&W', associateid:"GE Oil & Gas ",loc:'KMS9645009',sdate:'0000012004711', edate:"TML22S75A60"},
  ];
}
deletedata(){
  if (confirm("Do you want to delete the Account Details?")) {
    alert("Account Details Deleted Successfully.")
  } 
}

}

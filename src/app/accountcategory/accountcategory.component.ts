import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-accountcategory',
  templateUrl: './accountcategory.component.html',
  styleUrls: ['./accountcategory.component.scss']
})
export class AccountcategoryComponent implements OnInit  {
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
    {sno:'1',projectname:' GE Industrial-A',associateid:'GE Ticketless'},
    {sno:'2',projectname:' GE Appliances',associateid:'GE INDIA EXPORTS PVT LTD'},
    {sno:'3',projectname:' GE Industrial',associateid:'GE Oil & Gas '},
    {sno:'4',projectname:' GE Industrial-B',associateid:'GE Packaged Power'},
    {sno:'5',projectname:' GE P&W-A',associateid:'Metso'},
    {sno:'6',projectname:' GE Industrial',associateid:'GE Amphenol'},
    {sno:'7',projectname:' GE Industrial-C',associateid:'GE P&W11'},
    {sno:'8',projectname:' GE P&W-B',associateid:'GE APP'},
  ];
}
deletedata(){
  if (confirm("Do you want to delete the Account Details?")) {
    alert("Account Details Deleted Successfully.")
  } 
}

}


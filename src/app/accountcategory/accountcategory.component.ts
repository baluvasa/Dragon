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
      {associateid:'12-Jan-18'},
      {associateid:'03-Mar-18'},
      {associateid:'09-Sep-18'},
      {associateid:'21-Dec-18'}  
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
    {sno:'1',projectname:' GE Industrial-A',associateid:'GE Ticketless',associatename:'10'},
    {sno:'2',projectname:' GE Appliances',associateid:'GE INDIA EXPORTS PVT LTD',associatename:'20'},
    {sno:'3',projectname:' GE Industrial',associateid:'GE Oil & Gas ',associatename:'30'},
    {sno:'4',projectname:' GE Industrial-B',associateid:'GE Packaged Power',associatename:'40'},
    {sno:'5',projectname:' GE P&W-A',associateid:'Metso',associatename:'15'},
    {sno:'6',projectname:' GE Industrial',associateid:'GE Amphenol',associatename:'25'},
    {sno:'7',projectname:' GE Industrial-C',associateid:'GE P&W11',associatename:'35'},
    {sno:'8',projectname:' GE P&W-B',associateid:'GE APP',associatename:'45'},
  ];
}
deletedata(){
  if (confirm("Do you want to delete the Data")) {
    alert("Data Deleted Successfully")
  } 
}
}
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
      {name:'INR'},
      {name:'USD'},
      {name:'JPY'},
      {name:'IDR'}
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
    {sno:'1',projectname:'INR',associateid:'10-Jan-18',associatename:'10'},
    {sno:'2',projectname:'USD',associateid:'12-Jan-16',associatename:'20'},
    {sno:'3',projectname:'JPY',associateid:'17-Jan-15',associatename:'30'},
    {sno:'4',projectname:'INR',associateid:'21-Jan-15',associatename:'40'},
    {sno:'5',projectname:'USD',associateid:'25-Jan-19',associatename:'15'},
    {sno:'6',projectname:'JPY',associateid:'09-Jan-09',associatename:'25'},
    {sno:'7',projectname:'INR',associateid:'18-Jan-12',associatename:'35'},
    {sno:'8',projectname:'USD',associateid:'22-Jan-14',associatename:'45'},
  ];
}
deletedata(){
  if (confirm("Do you want to delete the Data")) {
    alert("Data Deleted Successfully")
  } 
}
}
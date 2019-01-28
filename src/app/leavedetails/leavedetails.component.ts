import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';
@Component({
  selector: 'app-leavedetails',
  templateUrl: './leavedetails.component.html',
  styleUrls: ['./leavedetails.component.scss']
})
export class LeavedetailsComponent implements OnInit {
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
      {associateid:'505050', name:"vijay"},
      {associateid:'505051', name:"vishal"},
      {associateid:'505052', name:"balu"},
      {associateid:'505053', name:"mani"}  
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
    {sno:'1',projectname:'Project A',associateid:'545454',associatename:'balakrishna',date:'2011/12/06'},
    {sno:'2',projectname:'Project B',associateid:'787878',associatename:'mani',date:'2011/12/06'},
    {sno:'3',projectname:'Project C',associateid:'595959',associatename:'akhil',date:'2011/12/06'},
    {sno:'4',projectname:'Project A',associateid:'454545',associatename:'khali',date:'2011/12/06'},
    {sno:'5',projectname:'Project B',associateid:'121212',associatename:'prashanthi',date:'2011/12/06'},
    {sno:'6',projectname:'Project C',associateid:'323232',associatename:'sridhar',date:'2011/12/06'},
    {sno:'7',projectname:'Project A',associateid:'568945',associatename:'sharath',date:'2011/12/06'},
    {sno:'8',projectname:'Project B',associateid:'451278',associatename:'shruthi',date:'2011/12/06'},
  ];
}
deletedata(){
  if (confirm("Do you want to delete the Data")) {
  alert("Data Deleted Successfully")
  } 
  } 
}

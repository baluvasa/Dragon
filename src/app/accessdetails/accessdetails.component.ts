import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-accessdetails',
  templateUrl: './accessdetails.component.html',
  styleUrls: ['./accessdetails.component.scss']
})
export class AccessdetailsComponent implements OnInit {
  leaveform: FormGroup;
    addleaveform: FormGroup;
    error:any;
    projects:any;
    project_years:any;
    associates:any;
    leavelists:any;
    dtOptions: any = {};
    role:any;
    roles:any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    if(localStorage.getItem('logeduser')=='admin'){
      this.role=true;
    }
    
    this.projects=     
      {name:'Mani B',associatename:'Admin',associateid:'BK00677333'};
   this.roles=
   [
   {name:'Mani B',associateid:'BM00677999',associatename:'Admin'},
   
   {name:'Rokkam Murali',associateid:'RM00677333',associatename:'User'}];
    this.leaveform = new FormGroup({
      projectname:new FormControl('',{}),
      projectyear:new FormControl('',{}),    
      associatesid:new FormControl('',{})    
    })
    this.addleaveform = new FormGroup({
      modalprojectname:new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$'), // <-- Allow letters and numbers only
      ])),
  
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
    
    {sno:'1',projectname:'Mani B',associateid:'MB00677999',associatename:'Admin'},
    {sno:'2',projectname:'Bala Krishna',associateid:'BK00677333',associatename:'Super Admin'},
    {sno:'3',projectname:'Sailesh Kumar N',associateid:'SK00677666',associatename:'User'},
    {sno:'4',projectname:'Venesh Mani Raj',associateid:'VR00677111',associatename:'User'},
    {sno:'5',projectname:'Dharma A',associateid:'DA00677444',associatename:'Admin'},
    {sno:'6',projectname:'khalesha',associateid:'SK00677222',associatename:'User'},    
    {sno:'7',projectname:'Kiran Sukumar',associateid:'KS00677777',associatename:'Admin'},
    {sno:'8',projectname:'Prashanthi',associateid:'NP00677000',associatename:'User'},    
    {sno:'9',projectname:'Rokkam Murali',associateid:'RK00677232',associatename:'User'},
  ];
}
deletedata(){
  if (confirm("Do you want to delete the Quote Details?")) {
    alert("Quote Details Deleted Successfully.")
  } 
}

}

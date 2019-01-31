import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';

@Component({
  selector: 'app-poapproval',
  templateUrl: './poapproval.component.html',
  styleUrls: ['./poapproval.component.scss']
})
export class PoapprovalComponent implements OnInit {
  poapprovalform: FormGroup;
  addpoform: FormGroup;
  error:any;
  projects:any;
  project_years:any;
  associates:any;
  leavelists:any;
  dtOptions: any = {};
  modaldtOptions: any = {};
  role:any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    if(localStorage.getItem('logeduser')=='admin'){
      this.role=true;
    }

    this.projects=[
      {name:'GE Energy-NPI Support-ICFC Pro',pid:'000000000029531'},
      {name:'IES_GE O&G-Vetco Gray Inc-ES',pid:'C02000013006600'},
      {name:'GE Energy - Industrial',pid:'12004711'},
      {name:'AVS 6 months',pid:'000000000029578'}
    ];
    this.project_years=[
      {year_month:'Jan-2019'},
      {year_month:'Feb-2019'},
      {year_month:'Mar-2019'},
      {year_month:'Apr-2019'}  
    ];
    this.associates=[
      {associateid:'505050', name:"Vijay Krishna"},
      {associateid:'505051', name:"Vishal Gourav"},
      {associateid:'505052', name:"Balu Vasa"},
      {associateid:'505053', name:"Mani Bandari"}  
    ];
    this.poapprovalform = new FormGroup({
      associatesid:new FormControl('',{}),
      associatesname:new FormControl('',{}),    
      projectyear:new FormControl('',{})    
    })
    this.addpoform = new FormGroup({
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
    this.modaldtOptions = {
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
searchpodata(){
  // this.leavelists=[
  //   {sno:'1',name:'GE Energy-NPI Support-ICFC Pro',pid:'000000000029531',associateid:'505050', associatename:"Vijay Krishna",date:'07-Jan-2019'},
  //   {sno:'2',name:'GE Energy-NPI Support-ICFC Pro',pid:'000000000029531',associateid:'505050', associatename:"Vijay Krishna",date:'19-FEb-2019'},
  //   {sno:'3',name:'IES_GE O&G-Vetco Gray Inc-ES',pid:'C02000013006600',associateid:'505051', associatename:"Vishal Gourav",date:'17-Jan-2019'},
  //   {sno:'4',name:'IES_GE O&G-Vetco Gray Inc-ES',pid:'C02000013006600',associateid:'505051', associatename:"Vishal Gourav",date:'20-Feb-2019'},
  //   {sno:'5',name:'GE Energy - Industrial',pid:'12004711',associateid:'505052', associatename:"Balu Vasa",date:'09-Jan-2019'},
  //   {sno:'6',name:'GE Energy - Industrial',pid:'12004711',associateid:'505052', associatename:"Balu Vasa",date:'19-Feb-2019'},
  //   {sno:'7',name:'AVS 6 months',pid:'000000000029578',associateid:'505053', associatename:"Mani Bandari",date:'18-Jan-2019'},
  //   {sno:'8',name:'AVS 6 months',pid:'000000000029578',associateid:'505053', associatename:"Mani Bandari",date:'20-Feb-2019'},
  // ];
  this.leavelists=[
    {sno:'1',associateid:'505050', associatename:"Vijay Krishna",date:'07-Jan-2019'},
    {sno:'2',associateid:'505050', associatename:"Vijay Krishna",date:'19-FEb-2019'},
    {sno:'3',associateid:'505051', associatename:"Vishal Gourav",date:'17-Jan-2019'},
    {sno:'4',associateid:'505051', associatename:"Vishal Gourav",date:'20-Feb-2019'},
    {sno:'5',associateid:'505052', associatename:"Balu Vasa",date:'09-Jan-2019'},
    {sno:'6',associateid:'505052', associatename:"Balu Vasa",date:'19-Feb-2019'},
    {sno:'7',associateid:'505053', associatename:"Mani Bandari",date:'18-Jan-2019'},
    {sno:'8',associateid:'505053', associatename:"Mani Bandari",date:'20-Feb-2019'},
  ];
}
deletedata(){
  if (confirm("Do you want to delete the Leave Details?")) {
  alert("Leave Details Deleted Successfully.")
  } 
  } 
  onSubmit(a){
    console.log(a);
  }
}

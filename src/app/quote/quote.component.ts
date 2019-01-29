import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  
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
      
      this.projects=     
        {name:'QMS9645007',associatename:'TML19S75A51',associateid:'0000032951893'};
      // this.project_years=
    
      //   {year_month:'45'}  
      // ;
      // this.associates=
       
      //   {associateid:'0000032951893'}  
      // ;
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
      
      {sno:'1',projectname:'QMS9645008',associateid:'0000032951893',associatename:'TML19S75A51'},
      {sno:'2',projectname:'KMS9645009',associateid:'0000063951811',associatename:'TML20S75Q72'},
      {sno:'3',projectname:'GMS9645010',associateid:'0000023295133',associatename:'TML30S75W93'},
      {sno:'4',projectname:'QMS9645007',associateid:'0000013295156',associatename:'TML50006E64'},
      {sno:'5',projectname:'KMS9645006',associateid:'0000012004711',associatename:'TML10S75B35'},
      {sno:'6',projectname:'GMS9645005',associateid:'0000099295189',associatename:'TML15006P66'},    
      {sno:'7',projectname:'QMS6645009',associateid:'0000012004711',associatename:'TML18006B67'},
      {sno:'8',projectname:'KMS6645008',associateid:'0000063295180',associatename:'TML27006B68'},    
      {sno:'9',projectname:'GMS6645007',associateid:'0000012004711',associatename:'TML22S75A39'},
    ];
  }
  deletedata(){
    if (confirm("Do you want to delete the Quote Details?")) {
      alert("Quote Details Deleted Successfully.")
    } 
  }
  }
  


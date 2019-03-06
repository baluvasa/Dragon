import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';
import { EventEmitterService } from '../event-emitter.service';
import { AppLink } from '../app-link';
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
  emplists:any; 
  ip=AppLink.baseURL;
  dtOptions = AppLink.DTOptions; 
  role:any;
  month_default=0;
  currency_default=0;
  constructor(private formBuilder: FormBuilder,private eventEmitterService:EventEmitterService ) { }

  ngOnInit() {
    
    this.eventEmitterService.menuinvokefunction();
    if(localStorage.getItem('logeduser')=='ADMIN'){
      this.role=true;
    }

    this.projects=[
      {name:'USD',country:'US Dollar'},
      {name:'JPY',country:'Yen'},
      {name:'EUR',country:'Euro'},
     
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
      modalaccountcategory:new FormControl('',{
        validators: []
      }),
      modalprojectname:new FormControl('',{
        validators: []
      }),
      modalpo_year_month:new FormControl('',{
        validators: []
      })
    })
   
      
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
 
  this.leavelists=[
    {sno:'1',associateid:'GE Appliances', associatename:"GE INDIA EXPORTS PVT LTD",pname:'GE P&W-A', pbc:"EUR",yearmonth:'Jan-2018',pcurr:'6,66,000.23'},
    {sno:'1',associateid:'GE Industrial', associatename:"GE Oil & Gas",pname:'GE P&W-A',pbc:'JPY', yearmonth:"Feb-2019",pcurr:'6,66,000.23'},
    {sno:'1',associateid:'GE P&W', associatename:"GE P&W-A",pname:'GE P&W-A',pbc:'JPY', yearmonth:"Feb-2018",pcurr:'6,66,000.23'},
    {sno:'1',associateid:'GE Industrial', associatename:"GE Amphenol",pname:'GE P&W-A',pbc:'EUR', yearmonth:"Jan-2015",pcurr:'6,66,000.23'},
    {sno:'1',associateid:'GE Appliances', associatename:"GE Oil & Gas",pname:'GE P&W-A',pbc:'USD', yearmonth:"Aug-2009",pcurr:'6,66,000.23'},
    {sno:'1',associateid:'GE Appliances', associatename:"GE Oil & Gas",pname:'GE P&W-A',pbc:'JPY', yearmonth:"Oct-2018",pcurr:'6,66,000.23'},
    {sno:'1',associateid:'GE Appliances', associatename:"GE Oil & Gas",pname:'GE P&W-A',pbc:'USD', yearmonth:"Dec-2019",pcurr:'6,66,000.23'},
    {sno:'1',associateid:'GE Appliances', associatename:"GE Oil & Gas",pname:'GE P&W-A',pbc:'EUR', yearmonth:"Nov-2016",pcurr:'6,66,000.23'},
  ];
  this.emplists=[
    {sno:'1',associatename:'GE Ticketless', associateid:"GE P&W-A",band:'U2',sdate:'10-Jan-2019',edate:"15-Oct-2020",rate:'0.01423',uom:'8',nod1:'24',amount1:'45,000.33',nod2:'18',amount2:'43,600.33'},
    {sno:'1',associatename:'GE Ticketless', associateid:"GE P&W-A",band:'U3',sdate:'16-Mar-2018', edate:"12-Oct-2019",rate:'0.01423',uom:'8',nod1:'21',amount1:'45,000.33',nod2:'18',amount2:'43,600.33'},
    {sno:'1',associatename:'GE Ticketless', associateid:"GE P&W-A",band:'U4',sdate:'16-Mar-2018', edate:"21-Oct-2021",rate:'0.01423',uom:'8',nod1:'21',amount1:'45,000.33',nod2:'18',amount2:'43,600.33'},
    {sno:'1',associatename:'GE Ticketless', associateid:"GE P&W-A",band:'U3',sdate:'10-Jan-2019', edate:"27-Oct-2022",rate:'0.01423',uom:'8',nod1:'21',amount1:'45,000.33',nod2:'18',amount2:'43,600.33'},
    {sno:'1',associatename:'GE Ticketless', associateid:"GE P&W-A",band:'U2',sdate:'15-Oct-2021', edate:"30-Oct-2020",rate:'0.01423',uom:'8',nod1:'21',amount1:'45,000.33',nod2:'18',amount2:'43,600.33'},
    {sno:'1',associatename:'GE Ticketless', associateid:"GE P&W-A",band:'U3',sdate:'16-Mar-2018', edate:"03-Oct-2021",rate:'0.01423',uom:'8',nod1:'21',amount1:'45,000.33',nod2:'18',amount2:'43,600.33'},
    {sno:'1',associatename:'GE Ticketless', associateid:"GE P&W-A",band:'P1',sdate:'15-Oct-2021', edate:"06-Oct-2023",rate:'0.01423',uom:'8',nod1:'21',amount1:'45,000.33',nod2:'18',amount2:'43,600.33'},
    {sno:'1',associatename:'GE Ticketless', associateid:"GE P&W-A",band:'P2',sdate:'10-Jan-2019', edate:"09-Oct-2021",rate:'0.01423',uom:'8',nod1:'21',amount1:'45,000.33',nod2:'18',amount2:'43,600.33'},
  ];
}
deletedata(){
  if (confirm("Do you want to delete the PO Approval Details?")) {
  alert("PO Approval Deleted Successfully.")
  } 
  } 
  onSubmit(a){
    console.log(a);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';
import { EventEmitterService } from '../event-emitter.service';
import { AppLink } from '../app-link';
import { HttpClient } from '@angular/common/http'
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { debug } from 'util';

@Component({
  selector: 'app-poapproval',
  templateUrl: './poapp.component.html',
  styleUrls: ['./poapp.component.scss']
})
export class PoappComponent implements OnInit {
  // public static get categorysearch(){ };
  a:any;
  poapprovalform: FormGroup;
  addpoform: FormGroup;
  addprojectinfoform:FormGroup;
  detailexpand:FormGroup;
  adderror:any;
addresult:any;
project_year_monthz:any;
addmsg:any;
acnames:any;
associateslist:any;
  error:any;
  errtable:any;
  projects:any;
  project_years:any;
  associates:any;
  leavelists:any;
  emplists:any; 
  ip=AppLink.baseURL;
  dtOptions = AppLink.DTOptions;
  month_year = AppLink.dateRange;
  month_years = AppLink.dateRanges;
  role:any;
  crud_url:any;
  month_default=0;
  currency_default=0;
  results:any;
  account_all_project_info:any;
  account_category_dropdown:any;
  account_name_data:any;
  project_name_data:any;
  project_year_month:any;
  project_customer_name:any;
  project_start_date:any;
  project_end_date:any;
  project_billing_cycle:any;
  project_pid:any;
  projectdata:any;
  emplistexpand:any;
  resourcelist:any;
  categories:any;
  detailproinfo:any;
  project_name_datas:any;
  project_types=AppLink.projectTypes;

  constructor(private formBuilder: FormBuilder,private eventEmitterService:EventEmitterService,private httpClient:HttpClient ) { }

  ngOnInit() {
    
    this.eventEmitterService.menuinvokefunction();
    if(localStorage.getItem('logeduser')=='ADMIN'){
      this.role=true;
    }

    this.projects=[
      {name:'Time&Material'},
      {name:'Fixed'},
      {name:'Test'},
   
     
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
      projectyear:new FormControl('',{}),
     accountcategory:new FormControl('',{}),   
     accountname:new FormControl('',{}),   
     proname:new FormControl('',{}), 
     protype:new FormControl('',{}),   
     modalpo_year_month:new FormControl('',{}),
      
    })
    this.detailexpand = new FormGroup({
      updaccountcat:new FormControl('',{}),    
      updpsdate:new FormControl('',{}),
      updprojectname:new FormControl('',{}),
      updaccountname:new FormControl('',{}),

      updcustname:new FormControl('',{}),
     
      updquote:new FormControl('',{}),
      updpid:new FormControl('',{}),
      // updpo:new FormControl('',{}),
      updcontract:new FormControl('',{}),
      updprojectsdate:new FormControl('',{}),
      updprojectedate:new FormControl('',{}),
      // updpo:new FormControl('',{}),
      modalpo_year_month:new FormControl('',{}),
      
  
    })
    this.addpoform = new FormGroup({
      modalaccountcategory:new FormControl('',{
        validators: [Validators.required]
      }),
      modalaccountname:new FormControl('',{
        validators:[Validators.required]
      }),
      modalprojectname:new FormControl('',{
        validators: [Validators.required]
      }),
      modalcustomername:new FormControl('',{
        validators:[Validators.required]
      }),
      modalpo_year_month:new FormControl('',{
        validators: [Validators.required]
      }),
      modalprojectstartdate:new FormControl('',{
        validators: [Validators.required]
      }),
      modalprojectenddate:new FormControl('',{
        validators: [Validators.required]
      }),
      modalprojectbilling:new FormControl('',{
        validators: [Validators.required]
      }),
      modalprojectpid:new FormControl('',{
        validators: [Validators.required]
      })
    })
   
  this.getcategories();
  
  // this.searchassociates(value)
  }
  setupdatemodel(emplist){
    console.log("vals",emplist);
    // this.get_all_project_info();
    this.detailexpand.setValue({
        updaccountcat:emplist.accountCategory,
        updpsdate:emplist.projectEndDate,
        updaccountname:emplist.accountName,
        updprojectname:emplist.projectName,
        updcustname:emplist.customerName,
        // updaccount:emplistes.accountName,
        updquote:emplist.quote,
        // // updpid:empliste.quote,
         updcontract:emplist.contract,
        updprojectsdate:emplist.projectStartDate,
        updprojectedate:emplist.projectEndDate,
        // updbillingcurrency:emplist.billingCurrency,
        // updcontract:emplist.contract,
        updpid:emplist.pid,
        // updpo:emplist.po,
     
        modalpo_year_month:emplist.projectEndDate,
       
      });
      //console.log("vals",emplist);
     
      this.get_all_project_info(emplist);
 
    }
  
search_account_category_details(value){
  this.crud_url=this.ip+'/po/po_approval/fetch/projectInfoList?accountcategory='+value.accountCategory+'&projectName='+value.accountname+'&yyyyMMM='+value.projectyear+'&customerName='+value.customername+'&projectStartDate='+value.projectsdate+'&projectEndDate='+value.proedate+'&currency='+value.currencycode+'&pId='+value.pid;
  this.httpClient.get(this.crud_url).subscribe(result => {
    this.results=result;
    if(this.results.status==200){
      this.account_category_dropdown=this.results.accountCategoryList;
    console.log( "Account cat drop",this.account_category_dropdown);
    console.log("@@@@@", this.results);

    }
  },
  error =>{
    this.error='Connection Interrupted';
  });
}
searchassociates(value){
  console.log(value);



this.crud_url=this.ip+'/po/po_approval/fetch/projectInfoList?customerName='+value.updcustname+'&pId='+value.updpid+'&contract='+value.updcontract+'&quote='+value.updquote+'&yyyyMM='+value.modalpo_year_month;



 this.httpClient.get(this.crud_url).subscribe(result => {
    this.results=result;
    this.associateslist= this.results.projectInfoList;
    console.log("11111",this.crud_url);
    console.log("@@@@@", this.results);
    

  },
  error =>{
    this.error='No data available';
  });
}
close(){
  if(this.associateslist!=undefined){

    console.log("asslist",this.associateslist);
    this.associateslist=undefined;
     console.log("empty",this.associateslist);
  }
  
}
//Get all data after selecting a value in account category
getcategories(){
  let caturl=this.ip+'/po/po_approval/fetch/accountCategory';
  
  this.httpClient.get(caturl).subscribe(result => {    
    this.results=result;
    console.log("%%%",this.results)
    this.categories=this.results.accountCategoryList;
  },
  error => {
    this.error = 'Connection Interrupted..'; 
  });
}
search_account_category(accountcategory){
  

  let catnameurl=this.ip+'/po/po_approval/fetch/projectInfo?accountCategory='+accountcategory;
  this.httpClient.get(catnameurl).subscribe(result => {    
    
    this.results=result;
 
    this.acnames=this.results.projectInfoList;
    console.log("res",this.acnames);
  },
  error => {
    this.error = 'Connection Interrupted..'; 
  });
}
search_all_project_info(value){
  console.log(value.proname);``
  
  if(value.proname!=undefined) {
    this.crud_url=this.ip+'/po/po_approval/fetch/projectDetails?accountCategory='+value.accountcategory+'&accountName='+value.accountname+'&projectName='+value.proname+'&projectType='+value.protype+'&yyyyMM='+value.modalpo_year_month;
   console.log("11111", this.crud_url); 
  }  
  else if(value.accountcategory==null || value.accountname==null  || value.protype==null  || value.yyyyMM==null || value.proname==undefined)  {
    this.crud_url=this.ip+'/po/po_approval/fetch/projectDetails?accountCategory='+value.accountcategory+'&accountName='+value.accountname+'&projectName='+'&projectType='+value.protype+'&yyyyMM='+value.modalpo_year_month;
    console.log("222222", this.crud_url);
  }
 this.httpClient.get(this.crud_url).subscribe(result => {
    this.results=result;
    
    console.log("@@@@@", this.results);
    
    if(this.results.status==200){
      this.account_all_project_info=this.results.projectDetails;

       console.log("!!!!!!!!!!!!!!!",this.account_all_project_info)
    }
    else if(this.results.status==204){
      this.errtable=this.results.message;
    }
  },
  error =>{
    this.error='Connection Interrupted';
  });
}

//fetch all project data based on selected account category and account name
get_all_project_info(target){
  console.log("log",target);
  console.log(target.projectStartDate)
  console.log(target.projectEndDate)
  this.project_year_month=this.month_year(target.projectStartDate,target.projectEndDate);
  console.log(this.project_year_month)
  

  this.a=target;

  
}
get_all_project_infolist(target){

   this.projectdata =this.acnames.filter(t=>t.accountName == target);
  //  console.log( "222222",this.projectdata);

  this.a=target;
 
  this.project_name_data=this.projectdata[0].projectName;

  this.project_year_monthz=this.month_year(this.projectdata[0].projectStartDate,this.projectdata[0].projectEndDate);
  // console.log("1111111" ,this.project_year_month)//calls dateRange method in app-link.ts
  
  console.log( "222222",this.project_year_monthz);
  
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

input_search_po_data (value){
  let category={gid:value.addassociateid,associateName:value.addassociatename,accessType:value.addaccesstype,status:value.addstatus,createdBy:'admin'};
  console.log(category)
  let url=this.ip+'/po/access/add';
  this.httpClient.post(url,category).subscribe(result => {
    this.addresult=result;
    if(this.addresult.status==201){
      this.addmsg=this.addresult.message;
   
    }
    else if(this.addresult.status==409){
      this.addmsg=this.addresult.message;    
    }
  },
  error => {
    this.adderror = 'Connection Interrupted..'; 
  });
}
}

  

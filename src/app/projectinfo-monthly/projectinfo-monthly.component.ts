import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';
import { AppLink } from '../app-link';
import { AppServicesService } from '../app-services.service';
import { HttpClient } from '@angular/common/http'
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-projectinfo-monthly',
  templateUrl: './projectinfo-monthly.component.html',
  styleUrls: ['./projectinfo-monthly.component.scss']
})
export class ProjectinfoMonthlyComponent implements OnInit {
  role:any;
  maxdate:any;
  mindate:any;
  project_years:any;
  crud_url:any;
  results:any;
  projectstotallist:any;
  projectresourcelist:any;
  error:any;
  resourcebill:any;
  ip=AppLink.baseURL;
  monthlyform:FormGroup;
  poyearmonth = AppLink.onOpenCalendar; 
  constructor(private eventEmitterService: EventEmitterService,private appservice:AppServicesService,private httpClient:HttpClient) { }
  
  ngOnInit() {
    this.eventEmitterService.menuinvokefunction(); 
    if(localStorage.getItem('logeduser')=='ADMIN'){
      this.role=true;
    }
    this.postartenddates();
  }
  
  
  projectmaxdate(max){
    
    this.maxdate=new Date(max);
  }
  projectmindate(min){
    this.mindate=new Date(min);
    
  }
  
  postartenddates(){
    this.project_years=this.appservice.getdates();
    console.log(this.project_years);
    this.projectmaxdate(this.project_years.startdate);
   this.projectmindate(this.project_years.enddate);
  }

  setupdatemodel(emplist){
    console.log("vals",emplist);
    // this.get_all_project_info();
    this.monthlyform.setValue({
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
    
    // this.get_all_project_info(emplist);
    
  }
  // getSum(index: number) : number {
  //   let sum = 0;
  //   for(let i = 0; i < this.items.length; i++) {
  //     sum += this.items[i][index];
  //   }
  //   return sum;
  // }
  onOpenCalendar(selecteddate){ 
    this.poyearmonth(selecteddate);
  }
  searchassociatesdata(){
    let month_year=$("#month_year_value").val();
    console.log(this.project_years);

    console.log("!@@@@",month_year);
  
    
    
    this.crud_url=this.ip+'/po/po_approval/fetch/projectInfoList?customerName='+this.project_years.customername+'&pId='+this.project_years.pid+'&contract='+this.project_years.contract+'&quote='+this.project_years.quote+'&yyyyMM='+month_year;
    
    
    
    this.httpClient.get(this.crud_url).subscribe(result => {
      this.results=result;
      this.projectstotallist= this.results.projectedTotalsObj;
       console.log(this.projectstotallist);
      this.projectresourcelist=this.results.superResourceBOList;
      console.log(this.projectresourcelist);
      this.resourcebill=this.results.superResourceBOList[0].monthlyDetails[0];
      // this.
      // let sum = 0;
      // for(let i = 0; i < this.projectresourcelist.monthlyDetails[i].length; i++) {
      //   sum += this.projectresourcelist.monthlyDetails[i].qty;
      // }
      // return sum;
      // console.log(sum);
      // this.billdetails=this.results.monthlyDetails
      
    },
    error =>{
      this.error='No data available';
    });
  }
}

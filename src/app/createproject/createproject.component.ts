import { Component, OnInit} from '@angular/core';
import { formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';
import { EventEmitterService } from '../event-emitter.service';
import { AppLink } from '../app-link';
import { HttpClient } from  "@angular/common/http";
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';


@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss']
})

export class CreateprojectComponent implements OnInit {  
  maxdate=null;
  mindate=null;
  c_maxdate=null;
  c_mindate=null;
  projectsearchform: FormGroup;
  projectresourceform: FormGroup;
  projectcreateform: FormGroup;
  projectupdateform: FormGroup;
  projectcontractform: FormGroup;
  categories:any;
  projects:any;
  projectpidlist:any;
  error:any;
  addresult:any;
  addmsg:any;
  addresourcemsg:any;
  deletemsg:any;
  updatemsg:any;
  updateerror:any;
  piderror:any;
  contract_start_date:any;
  contract_end_date:any;
  currentStyles:any;
  acc_category_default=0;
  project_name_default=0;
  acc_category_default1=0;
  acc_category_default2=0;
  project_name_default1=0;
  approval_default=0;
  submission_default=0;
  type_default=0;
  status_default=0;
  type_default1=0;
  status_default1='ACTIVE';
  role:any;
  currency_mode:any;
  projectlists:any;
  ip=AppLink.baseURL;
  dtOptions = AppLink.DTOptions; 
  approvalmethods = AppLink.approvalmethods; 
  submisson_modes = AppLink.submitionmodes; 
  types = AppLink.projectTypes; 
  currency_modes = AppLink.billingcurrency; 
  statuses = AppLink.status;
  location_status=AppLink.location;
  myDatePickerOptions=AppLink.myDatePickerOptions;
  catlists:any;
  acnames:any;
  contracts:any;
  results:any;
  cresources:any;
  addcontmsg:any;
  addconterror:any;
  // approvalmethods:any;
  // currency_modes:any;
  resources:any;
  uresources:any;
  categories_names:any;
  resourceerror:any;
  uresourceerror:any;
  resources_d:any;
  resources_n:any;
  // submisson_modes:any;
  constructor(private formBuilder: FormBuilder,private eventEmitterService: EventEmitterService,private  httpClient:HttpClient) {}
  ngOnInit() {
    this.eventEmitterService.menuinvokefunction();
    if(localStorage.getItem('logeduser')=='ADMIN'){
      this.role=true;
    }
    this.projectsearchform = new FormGroup({
      acc_category:new FormControl('',{
        validators: []
      }),
      project_name:new FormControl('',{
        validators: []
      }),
      type:new FormControl('',{
        validators: []
      }),
      status:new FormControl('',{
        validators: []
      })
    })
    this.projectcreateform = new FormGroup({
      acc_category:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      acc_name:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      project_name:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      customer_name:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      customer_spoc:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      approval_method:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      submission_mode:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      project_type:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      billing_currency:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      // po_amount:new FormControl('',{
      //   validators: [
      //     Validators.required
      //   ]
      // }),
      start_date:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      end_date:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      status:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      delivery_spoc:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      effort_spoc:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      pid:new FormControl('',{
        validators: [
          Validators.required
        ]
      })      
    });
    this.projectcontractform = new FormGroup({
      pid:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      quote_id:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      contract_id:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      contract_amount:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      unit_of_measurement:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      po_id:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      start_date:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      end_date:new FormControl('',{
        validators: [
          Validators.required
        ]
      })
      
    });
    this.projectresourceform = new FormGroup({
      pid:new FormControl('',{
        validators: [
          Validators.required
        ]
      }),
      contract_id:new FormControl('',{
        validators: [
          Validators.required
        ]
      })
    });
    this.projectupdateform = new FormGroup({
      
      update_id:new FormControl('',{
        validators: []
      }),
      update_acc_category:new FormControl('',{
        validators: []
      }),
      update_acc_name:new FormControl('',{
        validators: []
      }),
      update_project_name:new FormControl('',{
        validators: []
      }),
      update_customer_name:new FormControl('',{
        validators: []
      }),
      update_customer_spoc:new FormControl('',{
        validators: []
      }),
      update_approval_method:new FormControl('',{
        validators: []
      }),
      update_submission_mode:new FormControl('',{
        validators: []
      }),
      update_project_type:new FormControl('',{
        validators: []
      }),
      update_billing_currency:new FormControl('',{
        validators: []
      }),
      update_po_amount:new FormControl('',{
        validators: []
      }),
      update_start_date:new FormControl('',{
        validators: []
      }),
      update_end_date:new FormControl('',{
        validators: []
      }),
      // update_unit_of_measurement:new FormControl('',{
      //   validators: []
      // }),
      update_status:new FormControl('',{
        validators: []
      }),
      update_delivery_spoc:new FormControl('',{
        validators: []
      }),
      update_effort_spoc:new FormControl('',{
        validators: []
      }),
      update_pid:new FormControl('',{
        validators: []
      })
      // ,
      // update_quote_id:new FormControl('',{
      //   validators: []
      // }),
      // update_contract_id:new FormControl('',{
      //   validators: []
      // }),
      // update_po_id:new FormControl('',{
      //   validators: []
      // })
    });
    
    
    // On Load Methods
    this.all_project_pids();
    this.getcategories();
    this.getcresourcedetails();
  }  
  
  all_project_pids(){
    
    
    let allpids=this.ip+'/po/project/fetch/pidlist';
    
    this.httpClient.get(allpids).subscribe(result => {    
      this.results=result;
      this.projectpidlist=this.results.pidList;
      
      
    },
    error => {
      this.error = 'Connection Interrupted..'; 
    });
    
    
  }
  update_project_data(projectupdateform)
  {
    let update_start_date:any;
    let update_end_date:any;
    update_start_date=formatDate(projectupdateform.update_start_date, 'dd-MMM-yyyy', 'en');   
    update_end_date=formatDate(projectupdateform.update_end_date, 'dd-MMM-yyyy', 'en');   
    let update_project_data={
      id:projectupdateform.update_id,
      accountCategory:projectupdateform.update_acc_category,
      accountName:projectupdateform.update_acc_name,
      projectName:projectupdateform.update_project_name,
      customerName:projectupdateform.update_customer_name,
      customerSpoc:projectupdateform.update_customer_spoc,
      approvalMethod:projectupdateform.update_approval_method,
      submissionMode:projectupdateform.update_submission_mode,
      projectType:projectupdateform.update_project_type,
      billingCurrency:projectupdateform.update_billing_currency,
      poAmount:projectupdateform.update_po_amount,
      status:projectupdateform.update_status,
      projectStartDate:update_start_date,
      projectEndDate:update_end_date,
      deliverySpoc:projectupdateform.update_delivery_spoc,
      effortSpoc:projectupdateform.update_effort_spoc,
      pid:projectupdateform.update_pid,    
      modifiedBy:"ADMIN"
    }
    console.log(update_project_data)

    let url=this.ip+'/po/project/update';
    this.httpClient.put(url,update_project_data).subscribe(result => {
      this.addresult=result;
      console.log(this.addresult)
      if(this.addresult.status == 200){
        this.updatemsg=this.addresult.message; 
        // this.projectupdateform.reset();
      }
    },
    error => {
      this.updateerror = 'Connection Interrupted..'; 
    });
  }
  convertdate(associateStartDate){
    let newdate= new Date(associateStartDate);
    return newdate;
  }
  
  getcresourcedetails(){
    let cresourcesurl=this.ip+'/po/project/fetch/cresources';
    
    this.httpClient.get(cresourcesurl).subscribe(result => {    
      this.results=result;
      this.cresources=this.results.cresourceDetails;
    },
    error => {
      this.error = 'Connection Interrupted..'; 
    });
  }
  getcategories(){
    let caturl=this.ip+'/po/account_category/categories';
    
    this.httpClient.get(caturl).subscribe(result => {    
      this.results=result;
      this.categories=this.results.accountCategories;
    },
    error => {
      this.error = 'Connection Interrupted..'; 
    });
  }
  
  search_project_data(project_data){
    let searchprojecturl=this.ip+'/po/project/fetch?accountCategory='+project_data.acc_category+'&projectName='+project_data.project_name+'&projectType='+project_data.type+'&status='+project_data.status;
    this.httpClient.get(searchprojecturl).subscribe(result => {    
      this.results=result;
      this.projectlists=this.results.projectDetailsList;
      console.log(this.projectlists)
    },
    error => {
      this.error = 'Connection Interrupted..'; 
    });
    
    
  }
  delete_project_data(deletevalue){
    if (confirm("Do you want to delete the Account Details?")) { 
      let delurl=this.ip+'/po/project/delete?pId='+deletevalue.id;
      this.httpClient.delete(delurl).subscribe(result => {
        this.addresult=result;
        console.log(this.addresult)
        if(this.addresult.Status==200){
          this.deletemsg=this.addresult.message;
          console.log(this.deletemsg)
          // alert(this.deletemsg);
          // let data={associateid:'',associatename:'',accesstype:'',status:''};
          // this.searchleaves(data);
        } 
      },
      error => {
        this.error = 'Connection Interrupted..'; 
      }) 
    } 
  }  
  setmaxdate(data){
    this.maxdate=data;
  }
  setmindate(data){
    this.mindate=data;
  }
  projectmaxdate(max){
    
    this.c_maxdate=new Date(max);
  }
  projectmindate(min){
    this.c_mindate=new Date(min);
    
  }
  
  search_account_category(acc_cat){
    let catnameurl=this.ip+'/po/account_category/category/names?accountCategory='+acc_cat;
    this.httpClient.get(catnameurl).subscribe(result => {    
      this.results=result;
      this.acnames=this.results.accountNames;
    },
    error => {
      this.error = 'Connection Interrupted..'; 
    });
  }
  getResourceData(pid){
    if(pid!=""){
      let curl=this.ip+'/po/project/fetch/resources?pId='+pid;
      this.httpClient.get(curl).subscribe(result => {    
        this.results=result;
        if(this.results.status==200){
          this.resources=this.results.resourceLinkedDetails;
          let resources_p=this.results.resourceLinkedDetails;
          let z=[];
for(let h=0;h<resources_p.length;h++)
{
  let n={}
  n["associateId"]=resources_p[h].associateId;
  n["associateName"]=resources_p[h].associateName;
  n["band"]=resources_p[h].band;
  n["ratePerHour"]=0;
z.push(n);
}
this.resources=z;
          this.resources_d=this.results.resourceLinkedDetails;
          // console.log(this.resources);
          this.resourceerror="";
          this.currentStyles= { 'border-color': '' };
          
        }
        else if(this.results.status==204){
          this.resources=[];
          this.resourceerror =this.results.message;
          this.currentStyles= { 'border-color': '' };  
        }
        else {
          this.resourceerror =this.results.message;
          this.currentStyles= { 'border-color': 'red'};
          this.resources=[];
          $("#pidbox").focus();
        }
      },
      error => {
        this.error = 'Connection Interrupted..'; 
      });
      
      let contracts_data=this.ip+'/po/contract/fetch/contractsinfo?pid='+pid;
      this.httpClient.get(contracts_data).subscribe(result => { 
        this.results=result;
        if(this.results.status==200){
          this.contracts=this.results.contractdetails;
        }
        else{
          this.resourceerror =this.results.message;
          this.contracts=[]; 
          
        }
      },
      error => {
        this.error = 'Connection Interrupted..'; 
      }); 
    }
    else{
      this.resourceerror="";
      this.currentStyles= { 'border-color': '' };
    }
  }
  getonupdateResourceData(pid){
    if(pid!=""){
      let curl=this.ip+'/po/project/fetch/resources?pId='+pid;
      this.httpClient.get(curl).subscribe(result => {    
        this.results=result;
        if(this.results.status==200){
          this.uresources=this.results.resourceLinkedDetails;
          
        }
        else if(this.results.status==204){
          this.uresourceerror =this.results.message;
          this.currentStyles= { 'border-color': '' };  
        }
        else{
          this.uresourceerror =this.results.message;
          this.currentStyles= { 'border-color': 'red' };
          this.uresources=[];
          $("#upidbox").focus();
        }
      },
      error => {
        this.error = 'Connection Interrupted..'; 
      });
    }
    else{
      this.resourceerror="";
      this.currentStyles= { 'border-color': '' };
    }
  }
  
  // Create A New Project 
  
  add_project_details(project_data){
    // let resources_data=$("#resources_data"); 
    // let contract_data_resources_data=$("#contract_resources_data"); 
    // let all_resources=[];
    // let contract_resources=[];
    // for(let i=1,k=0;i<=resources_data[0].lastChild.childNodes.length;i++,k++){
    //   let resource={};
    //   if($('#'+k+'linked').prop("checked") == true){
    //     resource["associateId"]=resources_data[0].lastChild.childNodes[i].childNodes[0].textContent;
    //     resource["location"]=$('#'+k+'location option:selected').text();
    //     resource["rateMethod"]=$('#'+k+'ratemethod option:selected').text();
    //     resource["associateStartDate"]=$('#'+k+'startdate').val();
    //     resource["associateEndDate"]=$('#'+k+'enddate').val();
    //     resource["ratePerHour"]=$('#'+k+'text').val();
    //     resource["linked"]='Y';        
    //     resource["pId"]=project_data.pid;        
    //     all_resources.push(resource);      
    //   }
    // }
    // for(let i=1,k=0;i<=contract_data_resources_data[0].lastChild.childNodes.length;i++,k++){
    //   let resource={};      
    //   if($('#'+k+'linked1').prop("checked") == true){
    //     resource["associateId"]=contract_data_resources_data[0].lastChild.childNodes[i].childNodes[0].textContent;
    //     resource["location"]=$('#'+k+'location1 option:selected').text();
    //     resource["rateMethod"]=$('#'+k+'ratemethod1 option:selected').text();
    //     resource["associateStartDate"]=$('#'+k+'startdate1').val();
    //     resource["associateEndDate"]=$('#'+k+'enddate1').val();
    //     resource["ratePerHour"]=$('#'+k+'text1').val();
    //     resource["linked"]='Y';        
    //     resource["pId"]=project_data.pid;        
    //     all_resources.push(resource);      
    //     contract_resources.push(resource);
    //   }
    // }
    let project_start_date:any,
    project_end_date:any;
    
    project_start_date=formatDate(project_data.start_date, 'dd-MMM-yyyy', 'en');   
    project_end_date=formatDate(project_data.end_date, 'dd-MMM-yyyy', 'en');   
    
    let all_project_data={
      accountCategory:project_data.acc_category,
      accountName:project_data.acc_name,
      projectName:project_data.project_name,
      customerName:project_data.customer_name,
      customerSpoc:project_data.customer_spoc,
      approvalMethod:project_data.approval_method,
      submissionMode:project_data.submission_mode,
      projectType:project_data.project_type,
      billingCurrency:project_data.billing_currency,
      // poAmount:project_data.po_amount,
      status:project_data.status,
      projectStartDate:project_start_date,
      projectEndDate:project_end_date,
      deliverySpoc:project_data.delivery_spoc,
      effortSpoc:project_data.effort_spoc,
      pid:project_data.pid,    
      createdBy:"ADMIN"
    }
    console.log(all_project_data);
    
    let url=this.ip+'/po/project/create';
    this.httpClient.post(url,all_project_data).subscribe(result => {
      this.addresult=result;
      console.log(this.addresult)
      if(this.addresult.status == 201){
        this.addmsg=this.addresult.message; 
        this.projectcreateform.reset();
        this.resources=[];
        this.cresources=[]; 
      }
    },
    error => {
      this.error = 'Connection Interrupted..'; 
    });
  }
  get_project_dates(date_val){
    
    if(date_val!=""){
      let date_url=this.ip+'/po/project/fetch/piddates?pid='+date_val; 
      
      this.httpClient.get(date_url).subscribe(result => { 
        this.results=result;
        if(this.results.status==200){
          this.projectmaxdate(this.results.startdate);
          this.projectmindate(this.results.enddate);
          this.currency_mode=this.results.currency;
          this.currentStyles= { 'border-color': '' };
          this.piderror="";
          
        }
        else if(this.results.status==204){
          this.piderror=this.results.message;
          this.currentStyles= { 'border-color': 'red' };
        }
        
      },
      error => {
        this.error = 'Connection Interrupted..'; 
      });
    }
    else{
      this.currentStyles= { 'border-color': '' };
      this.piderror="Enter PID to search";
    }
    
  }
  update_data_model(projectlist){     
    console.log(projectlist)  
    this.projectupdateform.setValue({
      update_id:projectlist.id,
      update_acc_category:projectlist.accountCategory,
      update_acc_name:projectlist.accountName,
      update_project_name:projectlist.projectName,
      update_customer_name:projectlist.customerName,
      update_customer_spoc:projectlist.customerSpoc,
      update_approval_method:projectlist.approvalMethod,
      update_submission_mode:projectlist.submissionMode,
      update_project_type:projectlist.projectType,
      update_billing_currency:projectlist.billingCurrency,
      update_po_amount:projectlist.poAmount,
      update_start_date:projectlist.projectStartDate,
      update_end_date:projectlist.projectEndDate,
      update_status:projectlist.status,
      update_delivery_spoc:projectlist.deliverySpoc,
      update_effort_spoc:projectlist.effortSpoc,
      update_pid:projectlist.pid
    });
    this.getonupdateResourceData(projectlist.pid);
    console.log(this.projectupdateform);
  }
  add_contract_details(projectcontractform){
    console.log(projectcontractform)
    
    let start_date:any,
    end_date:any;
    
    start_date=formatDate(projectcontractform.start_date, 'dd-MMM-yyyy', 'en');   
    end_date=formatDate(projectcontractform.end_date, 'dd-MMM-yyyy', 'en'); 
    
    let project_contract_data={ 
      contractNumber:projectcontractform.contract_id,
      contractAmount:projectcontractform.contract_amount,
      pid:projectcontractform.pid,
      contractStartDate:start_date,
      contractEndDate:end_date,
      quote:projectcontractform.quote_id,
      po:projectcontractform.po_id,
      uom:projectcontractform.unit_of_measurement,
      createdBy:"ADMIN"
    }
    
    console.log(project_contract_data)
    
    let url=this.ip+'/po/contract/add';
    this.httpClient.post(url,project_contract_data).subscribe(result => {
      this.addresult=result;
      console.log(this.addresult)
      if(this.addresult.status == 201){
        this.addcontmsg=this.addresult.message; 
        this.projectcontractform.reset();
      }
      else{
        this.addconterror=this.addresult.message;     
      }
    },
    error => {
      this.error = 'Connection Interrupted..'; 
    });
  }
  
  add_resource_details(projectresourceform){
    let resources_data=$("#resources_data"); 
    let contract_data_resources_data=$("#contract_resources_data"); 
    let all_resources=[];
    let contract_resources=[];
    let to_contract_resources=[];
    for(let i=1,k=0;i<=resources_data[0].lastChild.childNodes.length;i++,k++){
      let resource={};
      if($('#'+k+'linked').prop("checked") == true){
        resource["associateId"]=resources_data[0].lastChild.childNodes[i].childNodes[0].textContent;
        resource["location"]=$('#'+k+'location option:selected').text();
        resource["rateMethod"]=$('#'+k+'ratemethod option:selected').text();
        resource["associateStartDate"]=$('#'+k+'startdate').val();
        resource["associateEndDate"]=$('#'+k+'enddate').val();
        resource["ratePerHour"]=$('#'+k+'text').val();
        resource["linked"]='Y';        
        resource["pId"]=projectresourceform.pid;        
        resource["contractId"]=projectresourceform.contract_id;        
        all_resources.push(resource);      
      }
      if($('#'+k+'linked').prop("checked") ==false){
        resource["associateId"]=resources_data[0].lastChild.childNodes[i].childNodes[0].textContent;
        resource["location"]=$('#'+k+'location option:selected').text();
        resource["rateMethod"]=$('#'+k+'ratemethod1 option:selected').text();
        resource["associateStartDate"]=$('#'+k+'startdate').val();
        resource["associateEndDate"]=$('#'+k+'enddate').val();
        resource["ratePerHour"]=$('#'+k+'text').val();
        resource["linked"]='N';        
        resource["pId"]=projectresourceform.pid;        
        resource["contractId"]='';        
        // all_resources.push(resource);      
        to_contract_resources.push(resource);      
      }
    }
    for(let i=1,k=0;i<=contract_data_resources_data[0].lastChild.childNodes.length;i++,k++){
      let resource={};      
      if($('#'+k+'linked1').prop("checked") == true){
        resource["associateId"]=contract_data_resources_data[0].lastChild.childNodes[i].childNodes[0].textContent;
        resource["location"]=$('#'+k+'location1 option:selected').text();
        resource["associateStartDate"]=$('#'+k+'startdate1').val();
        resource["associateEndDate"]=$('#'+k+'enddate1').val();
        resource["ratePerHour"]=$('#'+k+'text1').val();
        resource["linked"]='Y';        
        resource["pId"]=projectresourceform.pid;     
        resource["contractId"]=projectresourceform.contract_id;
        all_resources.push(resource);      
        contract_resources.push(resource);
      }
    }
    
    let resource_link={
      resources:all_resources,
      contractToPid:contract_resources,
      toContractPid:this.list
    }
    console.log(resource_link)
    let url=this.ip+'/po/resourcemap/add';
    this.httpClient.post(url,resource_link).subscribe(result => {
      this.addresult=result;
      console.log(this.addresult)
      if(this.addresult.status == 201){
        this.addresourcemsg=this.addresult.message; 
        console.log(this.addresourcemsg);
        this.projectresourceform.reset();
        
      }
    },
    error => {
      this.error = 'Connection Interrupted..'; 
    });
    
  }
  selectedcontractres(value){
    this.resources = this.resources_d.filter( element => element.contractId ==value)
    this.resources_n = this.resources_d.filter( element => element.contractId !=value)
    let k=this.remove_duplicates(this.resources, this.resources_n);
    
    for(let m=0;m<k.length;m++){
      let n={};
      n["associateId"]=k[m].associateId;
      n["associateName"]=k[m].associateName;
      n["band"]=k[m].band;
      n["location"]=null;
      n["associateStartDate"]=null;
      n["associateEndDate"]=null;
      n["ratePerHour"]=0;
      n["linked"]="N";
      n["pId"]=k[m].pId;
      n["status"]=k[m].status;
      n["contractId"]='';  
      this.resources.push(n)
    }
    // console.log(this.resources)
  }
  
  remove_duplicates(a, b) {
    for (var i = 0, len = a.length; i < len; i++) { 
      for (var j = 0, len2 = b.length; j < len2; j++) { 
        if (a[i].associateId == b[j].associateId) {
          b.splice(j, 1);
          len2=b.length;
        }
      }
    }
    return b;
    
  }
  
  
  list=[];
  changemode(a,b){
    let da={};
    if(!a.srcElement.checked){    
      this.list.push(b.resourceMapId);
    } 
    else{
      var index = this.list.indexOf( b.resourceMapId);
      if (index !== -1) this.list.splice(index, 1);
    }
    // console.log(this.list)
  }
  check_pid(value){
    let curl=this.ip+'/po/project/fetch/checkpid?pid='+value;
    this.httpClient.get(curl).subscribe(result => { 
      this.results=result;
      if(this.results.status==200){
        this.resources=this.results.resourceDetails;
        this.resourceerror =this.results.message;
        this.currentStyles= { 'border-color': 'red' };
        $("#pidbox").focus(); 
      }
      else if(this.results.status==204){
        this.resourceerror ='';
        this.currentStyles= { 'border-color': '' }; 
      }
      else{
      }
    },
    error => {
      this.error = 'Connection Interrupted..'; 
    });
  } 
  
  
}

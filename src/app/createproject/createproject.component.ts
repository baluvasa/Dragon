import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';
import { EventEmitterService } from '../event-emitter.service';
import { AppLink } from '../app-link';
import { HttpClient } from  "@angular/common/http";
@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss']
})

export class CreateprojectComponent implements OnInit {  
  
  projectsearchform: FormGroup;
  projectcreateform: FormGroup;
  categories:any;
  projects:any;
  // types:any;
  // statuses:any;
  error:any;
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
  projectlists:any;
  ip=AppLink.baseURL;
  dtOptions = AppLink.DTOptions; 
  approvalmethods = AppLink.approvalmethods; 
  submisson_modes = AppLink.submitionmodes; 
  types = AppLink.projectTypes; 
  currency_modes = AppLink.billingcurrency; 
  statuses = AppLink.status; 
  myDatePickerOptions=AppLink.myDatePickerOptions;
  catlists:any;
  acnames:any;
  results:any;
  // approvalmethods:any;
  // currency_modes:any;
  resources:any;
  categories_names:any;
  // submisson_modes:any;
  constructor(private formBuilder: FormBuilder,private eventEmitterService: EventEmitterService,private  httpClient:HttpClient) {}
  ngOnInit() {
    this.eventEmitterService.menuinvokefunction();
    if(localStorage.getItem('logeduser')=='ADMIN'){
      this.role=true;
    }

    // this.categories=[
    //   {acc_category:"GE India Exports Pvt. Ltd.",code:"giepl",acc_name:'Bhaskar V PO',acc_name_code:'bvp'},
    //   {acc_category:"GE Industrial - US India",code:"giui",acc_name:'HTC (Jul18)',acc_name_code:'htc'},
    //   {acc_category:"GE Oil & Gas",code:"gog",acc_name:'Patrick Old',acc_name_code:'patold'},
    //   {acc_category:"GE Packaged Power",code:"gpp",acc_name:'Aero',acc_name_code:'aero'},
    //   {acc_category:"GE Power & Water",code:"gpw",acc_name:'Ommi Gopi',acc_name_code:'ommi'},
    //   {acc_category:"Amphenol",code:"amp",acc_name:'AVS__1st half',acc_name_code:'avs1st'}
    // ];
    // this.projects =[
    //   {projectname:'GE Energy-NPI Support-ICFC Pro',pid:'000000000029531'},
    //   {projectname:'IES_GE O&G-Vetco Gray Inc-ES',pid:'C02000013006600'},
    //   {projectname:'GE Energy - Industrial',pid:'12004711'},
    //   {projectname:'AVS 6 months',pid:'000000000029578'}
    // ];
    
    
    this.resources=[      
      {id:'MK00123456',name:'Venkatesh',band:'U1',start_date:'01-Jan-2019',end_date:'29-Feb-2019'},
      {id:'SP00234567',name:'Swayam',band:'U2',start_date:'01-Jan-2019',end_date:'29-Feb-2019'},
      {id:'GC00345678',name:'Chandra',band:'U3',start_date:'01-Jan-2019',end_date:'29-Feb-2019'},
      {id:'KM00456789',name:'Krishna',band:'U4',start_date:'01-Jan-2019',end_date:'29-Feb-2019'}
    ];
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
        validators: []
      }),
      acc_name:new FormControl('',{
        validators: []
      }),
      project_name:new FormControl('',{
        validators: []
      }),
      customer_name:new FormControl('',{
        validators: []
      }),
      customer_spoc:new FormControl('',{
        validators: []
      }),
      approval_method:new FormControl('',{
        validators: []
      }),
      submission_mode:new FormControl('',{
        validators: []
      }),
      project_type:new FormControl('',{
        validators: []
      }),
      billing_currency:new FormControl('',{
        validators: []
      }),
      po_amount:new FormControl('',{
        validators: []
      }),
      start_date:new FormControl('',{
        validators: []
      }),
      end_date:new FormControl('',{
        validators: []
      }),
      status:new FormControl('',{
        validators: []
      }),
      delivery_spoc:new FormControl('',{
        validators: []
      }),
      effort_spoc:new FormControl('',{
        validators: []
      }),
      pid:new FormControl('',{
        validators: []
      }),
      quote_id:new FormControl('',{
        validators: []
      }),
      contract_id:new FormControl('',{
        validators: []
      }),
      po_id:new FormControl('',{
        validators: []
      }),
      po_resource_table:new FormControl('',{
        validators: []
      })
    });
    this.getcategories();
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
  errordata() {
    this.error = 'no data found';
  }
  errorexceptiondata() {
    this.error = 'Exception has occurred while fetching Project details';
  }
  badrequest() {
    this.error="Bad Request";
  }
  search_project_data(project_data){
      console.log(project_data);
      let searchprojecturl=this.ip+'/po/project/fetch?accountCategory='+project_data.acc_category+'&projectName='+project_data.project_name+'&projectType='+project_data.projectType+'&status='+project_data.status;
      this.httpClient.get(searchprojecturl).subscribe(result => {    
        this.results=result;
        this.projectlists=this.results.projectDetailsList;
      },
      error => {
        this.error = 'Connection Interrupted..'; 
      });


  }
  deletedata(){
    if (confirm("Do you want to delete the Project Details?")) {
    alert("Project Details Deleted Successfully.");
    } 
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



// Create A New Project 

add_project_details(project_data){
  let resources_data=$("#resources_data"); 
  for(let i=1,k=0;i<=resources_data[0].lastChild.childNodes.length;i++,k++){
  if($('#'+k+'linked').prop("checked") == true){
  let rph=$('#'+k+'text').val();
  let sd=$('#'+k+'startdate').val();
  let ed=$('#'+k+'enddate').val();
  let linked=$('#'+k+'location option:selected').text();
  console.log(resources_data[0].lastChild.childNodes[i].childNodes[0].textContent)
  console.log(resources_data[0].lastChild.childNodes[i].childNodes[1].textContent)
  console.log(resources_data[0].lastChild.childNodes[i].childNodes[2].textContent)
  console.log(sd)
  console.log(ed)
  console.log(rph) 
  console.log(linked)
  }
  // }
  }
  } 

}

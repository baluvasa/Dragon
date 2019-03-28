import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { EventEmitterService } from '../event-emitter.service';
import { AppLink } from '../app-link';
import { HttpClient } from  "@angular/common/http";
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  searchresourceform:FormGroup;
  updateresourcedetails:FormGroup;
  role:any;
  ip=AppLink.baseURL;
  dtOptions = AppLink.DTOptions; 
  band= AppLink.band; 
  list:any;
  projectpidlist:any;
  editerror:any;
  edit=0;
  results:any;
  resourcelists:any;
  addresult:any;
  error:any;
  adderrormsg='';
  updateerrormsg='';
  searcherrormsg='';
  deleteerrormsg="";
  addmsg="";
  updatemsg="";
  deletemsg="";
  
  addresourceform:FormGroup;
  constructor(private formBuilder: FormBuilder,private eventEmitterService: EventEmitterService,private  httpClient:HttpClient) { }
  
  ngOnInit() {
    this.eventEmitterService.menuinvokefunction();
    if(localStorage.getItem('logeduser')=='ADMIN'){
      this.role=true;
    }
    
  
    this.searchresourceform = new FormGroup({
      search_associatename:new FormControl('',{
        validators: []
      }),
      search_associateid:new FormControl('',{
        validators: []
      }),
      search_band:new FormControl('',{
        validators: []
      })
    });
    
    this.addresourceform = new FormGroup({
      addassociatename:new FormControl('',{
        validators: [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z][a-zA-Z ]*[a-zA-Z]$') 
        ]
      }),
      addassociateid:new FormControl('',{
        validators: [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
          Validators.pattern('^[a-zA-Z][a-zA-Z0-9]*[a-zA-Z0-9]$') 
        ]
      }),
      addband:new FormControl('',{
        validators: [Validators.required]
      }),
      addemailid:new FormControl('',{
        validators: [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]
      }),
      addcontactnumber:new FormControl('',{
        validators: [
          Validators.minLength(10),
          Validators.maxLength(10) 
        ]
      }),
      addpid:new FormControl('',{
        validators: [Validators.required]
      })
    });
    this.updateresourcedetails = new FormGroup({
      editassociatename:new FormControl('',{
        validators: [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z][a-zA-Z ]*[a-zA-Z]$') 
        ]
      }),
      editassociateid:new FormControl('',{
        validators: [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[a-zA-Z][a-zA-Z0-9]*[a-zA-Z0-9]$') 
        ]
      }),
      editband:new FormControl('',{
        validators: [Validators.required]
      }),
      editemailid:new FormControl('',{
        validators: [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]
      }),
      editcontactnumber:new FormControl('',{
        validators: [
          Validators.minLength(10),
          Validators.maxLength(10) 
        ]
      }),
      editpid:new FormControl('',{
        validators: [Validators.required]
      })
    });
    this.all_project_pids();
    
  }
  searchreset(){
    this.searchresourceform.reset({ search_associatename: '', search_associateid: '',search_band:'' });
  }
  closemsg(){
    this.error='';
    this.deletemsg='';
    this.addmsg='';
    this.adderrormsg='';
    this.updatemsg='';
    this.updateerrormsg='';
    this.searcherrormsg='';
  }
  search_resource_details(value){   
    console.log(value)
    let url=this.ip+'/po/resource/fetch?associateId='+value.search_associateid+'&associateName='+value.search_associatename+'&band='+value.search_band;
    this.httpClient.get(url).subscribe(result => {  
      this.results=result;
      this.resourcelists=this.results.resourcedetails;
      console.log(this.resourcelists);
    },
    error => {
      this.searcherrormsg = 'Connection Interrupted..'; 
    });
    
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

  add_resource_data(addresourcedata)
  {
    let resources={
      associateId: addresourcedata.addassociateid,
      associateName: addresourcedata.addassociatename,
      band:  addresourcedata.addband,
      pId:addresourcedata.addpid,
      emailId: addresourcedata.addemailid,
      contactNumber: addresourcedata.addcontactnumber||'',
      createdBy:"admin"
    };
    let url=this.ip+'/po/resource/create';
   this.httpClient.post(url,resources).subscribe(result => { 

    this.addresult=result;
      if(this.addresult.status==201){
        this.addmsg=this.addresult.message;
        this.addresourceform.reset();
      }
      else if(this.addresult.status==409){
        this.adderrormsg=this.addresult.message;
      }
     
    },
    error => {
        this.adderrormsg = 'Connection Interrupted..'; 
    })
  }
  
  
  
  updateresourcefields(resourcelist){
    this.updateresourcedetails.setValue({
      editassociateid:resourcelist.associateId,
      editassociatename:resourcelist.associateName,
      editband:resourcelist.band,
      editpid:resourcelist.pId,
      editemailid:resourcelist.emailId,
      editcontactnumber:resourcelist.contactNumber||''
    });
  }
  
  
  update_resource_data(updateresourcedata)
  {
    let modifyurl=this.ip+'/po/resource/update';
    let updatedata={
      associateId:updateresourcedata.editassociateid,
      associateName:updateresourcedata.editassociatename,
      band: updateresourcedata.editband,
      pId: updateresourcedata.editpid,
      emailId: updateresourcedata.editemailid,
      contactNumber: updateresourcedata.editcontactnumber,
      modifiedBy:"user"
    };
    if(updateresourcedata.editpid==""){
      let flag= confirm("Associate is Not Mapped to any PID,\nDo you want to update ?");
      if(flag== true){
        this.httpClient.put(modifyurl,updatedata).subscribe(result => {
          this.addresult=result;
          if(this.addresult.status=200){
            this.updatemsg=this.addresult.message;
          let data={
              search_associateid:'',
              search_associatename:'',
              search_band:''
            };
            this.search_resource_details(data);
            this.updateresourcedetails.reset();
          }
        },
        error => {
          this.updateerrormsg = 'Connection Interrupted..'; 
        });   
      }
      else{
        alert("Resource Data is not Updated.");
      }
    }
    else{
      this.httpClient.put(modifyurl,updatedata).subscribe(result => {
        this.addresult=result;
        if(this.addresult.status=200){
          this.updatemsg=this.addresult.message;
        let data={
            search_associateid:'',
            search_associatename:'',
            search_band:''
          };
          this.search_resource_details(data);
          this.updateresourcedetails.reset();
        }
      },
      error => {
        this.updateerrormsg = 'Connection Interrupted..'; 
      });
    }
    
    // this.updateresourcedetails.reset();
  }
  
  
  delete_resource_data(resourcelist){
    if (confirm("Do you want to delete Resource For the Year?")) {    
      let delurl=this.ip+'/po/resource/delete?associateId='+resourcelist.associateId;
      this.httpClient.delete(delurl).subscribe(result => {
        this.addresult=result;
        if(this.addresult.status==200){
          this.deletemsg=this.addresult.message;
          let data={
            search_associatename:'',
            search_associateid:'',
            search_band:''
          };
          this.search_resource_details(data);
        } 
      },
      error => {
        this.deleteerrormsg = 'Connection Interrupted..'; 
      })
      
    } 
  }
  
  
}

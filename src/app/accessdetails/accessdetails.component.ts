import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { AppLink } from '../app-link';
import { EventEmitterService } from '../event-emitter.service';
import { HttpClient } from  "@angular/common/http";
@Component({
  selector: 'app-accessdetails',
  templateUrl: './accessdetails.component.html',
  styleUrls: ['./accessdetails.component.scss']
})
export class AccessdetailsComponent implements OnInit {
  leaveform: FormGroup;
  addaccessdetails: FormGroup;
  updateaccessdetails: FormGroup;
  error:any;
  adderror:any;
  updateerror:any;
  projects:any;
  project_years:any;
  associates:any;
  accessdetails:any;
  ip=AppLink.baseURL;
  dtOptions = AppLink.DTOptions;
  accessTypes=AppLink.access_type; 
  statuses=AppLink.status;
  role:any;
  results:any;
  addresult:any;
  addmsg:any;
  deletemsg:any;
  updatemsg:any;
  constructor(private eventEmitterService: EventEmitterService,private formBuilder: FormBuilder,private  httpClient:HttpClient) { }
  
  ngOnInit() {
    this.eventEmitterService.menuinvokefunction();
    if(localStorage.getItem('logeduser')=='admin'){
      this.role=true;
    }
     this.leaveform = new FormGroup({
      associateid:new FormControl('',{}),
      associatename:new FormControl('',{}),     
      accesstype:new FormControl('',{}),    
      status:new FormControl('',{})    
    })
    this.addaccessdetails = new FormGroup({
      addassociateid:new FormControl('',{
        validators: [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
          Validators.pattern('^[a-zA-Z][a-zA-Z0-9]*[a-zA-Z0-9]$') 
        ]
      }),    
      addaccesstype:new FormControl(null,{ validators: [
        Validators.required,
      ]}),    
      addstatus:new FormControl(null,{validators: [
        Validators.required,
      ]}) ,
      addassociatename:new FormControl('', {
        validators: [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
          Validators.pattern('^[a-zA-Z][a-zA-Z0-9 ]*[a-zA-Z0-9]$') 
        ]
      }),
      
    })  
    this.updateaccessdetails = new FormGroup({
      updateassociateid:new FormControl('',{}),    
      updateaccesstype:new FormControl('',{ validators: [
        Validators.required,
      ]}),    
      updatestatus:new FormControl('',{ validators: [
        Validators.required,
      ]}) ,
      updateassociatename:new FormControl('', {
        validators: [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
          Validators.pattern('^[a-zA-Z][a-zA-Z0-9 ]*[a-zA-Z0-9]$') 
        ]
      }),
      
    })  
  }
  setupdatemodel(accessdetail){
    console.log(accessdetail)
    this.updateaccessdetails.setValue(
      {updateassociateid:accessdetail.gid,
        updateassociatename:accessdetail.associateName,
        updateaccesstype:accessdetail.accessType,
        updatestatus:accessdetail.status
      });
  }
  searchleaves(value){    
    console.log(value)
    let url=this.ip+'/po/access/fetch?gid='+value.associateid+'&name='+value.associatename+'&type='+value.accesstype+'&active='+value.status;
    this.httpClient.get(url).subscribe(result => {    
      this.results=result;
      this.accessdetails=this.results.accessdetails;
      console.log(this.results)
    },
    error => {
      this.error = 'Connection Interrupted..'; 
    });
  }
  add_accessdetails(value){
let category={gid:value.addassociateid,associateName:value.addassociatename,accessType:value.addaccesstype,status:value.addstatus,createdBy:'admin'};
console.log(category)
let url=this.ip+'/1po/access/add';
this.httpClient.post(url,category).subscribe(result => {
  console.log(result);
  this.addresult=result;
  if(this.addresult.status==201){
    this.addmsg=this.addresult.message;
    this.addaccessdetails.reset();
    let data={associateid:'',associatename:'',accesstype:'',status:''};
    this.searchleaves(data);
  }
},
error => {
  this.adderror = 'Connection Interrupted..'; 
});
  }
  closemsg(){
    this.error='';
    this.deletemsg='';
    this.addmsg='';
    this.adderror='';
    this.updatemsg='';
    this.updateerror='';
  }
 
  deletedata(deletevalue){
    console.log(deletevalue)
    if (confirm("Do you want to delete the Account Details?")) {    
      let delurl=this.ip+'/po/access/delete?gid='+deletevalue.gid;
      this.httpClient.delete(delurl).subscribe(result => {
        this.addresult=result;
        console.log(this.addresult)
        if(this.addresult.Status==200){
          this.deletemsg=this.addresult.message;
          console.log(this.deletemsg)
          // alert(this.deletemsg);
          let data={associateid:'',associatename:'',accesstype:'',status:''};
          this.searchleaves(data);
        } 
      },
      error => {
        this.error = 'Connection Interrupted..'; 
      })  
    } 
  }
  update_accessdetails(updateaccessdetails){    
    let modilfyurl=this.ip+'/po/access/update';
    let updatecategory={
      gid :updateaccessdetails.updateassociateid,
      associateName:updateaccessdetails.updateassociatename,
      accessType:updateaccessdetails.updateaccesstype,
      status:updateaccessdetails.updatestatus,
      modifiedBy:'admin'};
      console.log(updatecategory)
    this.httpClient.put(modilfyurl,updatecategory).subscribe(result => {
      this.addresult=result;
      console.log(this.addresult)
      if(this.addresult.status==200){
        this.updatemsg=this.addresult.message;
        let data={associateid:'',associatename:'',accesstype:'',status:''};
        this.searchleaves(data);
      }
    },
    error => {
      this.updateerror = 'Connection Interrupted..'; 
    });
  }
  }
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
    
    // this.projects=     
    // {name:'Mani B',associatename:'Admin User',associateid:'BK00677333'};
    //  this.roles=[
    //  {name:'Mani B',associateid:'BM00677999',associatename:'Admin User'},
    
    //  {name:'Rokkam Murali',associateid:'RM00677333',associatename:'Normal User'}];
    //  this.statuses=[
    //  {name:'Active',code:'act'},
    //  {name:'In Active',code:'inact'}];
    
    
    this.leaveform = new FormGroup({
      associateid:new FormControl('',{}),
      associatename:new FormControl('',{}),    
      accesstype:new FormControl('',{}),    
      status:new FormControl('',{})    
    })
    this.addaccessdetails = new FormGroup({
      addassociateid:new FormControl('',{}),    
      addaccesstype:new FormControl('',{}),    
      addstatus:new FormControl('',{}) ,
      addassociatename:new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$'), // <-- Allow letters and numbers only
      ])),
      
    })  
    this.updateaccessdetails = new FormGroup({
      updateassociateid:new FormControl('',{}),    
      updateaccesstype:new FormControl('',{}),    
      updatestatus:new FormControl('',{}) ,
      updateassociatename:new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(4),
        Validators.required,
        Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$'), // <-- Allow letters and numbers only
      ])),
      
    })  
  }
  // nodata(){
  //   this.error="No Data Found";
  // }
  // exception(){
  //   this.error="Exception has occurred while Fetching the Data";
  // }
  // badrequest(){
  //   this.error="Bad Request";
  // }
  setupdatemodel(accessdetail){
    console.log(accessdetail)
    this.updateaccessdetails.setValue(
      {updateassociateid:accessdetail.associateId,
        updateassociatename:accessdetail.associateName,
        updateaccesstype:accessdetail.accessType,
        updatestatus:accessdetail.activeStatus
      });
  }
  searchleaves(value){
    console.log(value)
    let url='http://10.56.65.45:8082/po/access/fetch?id='+value.associateid+'&name='+value.associatename+'&type='+value.accesstype+'&active='+value.status;
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
let category={associateId:value.addassociateid,associateName:value.addassociatename,accessType:value.addaccesstype,activeStatus:value.addstatus,createdBy:'admin'};
let url='http://10.56.65.45:8082/po/access/add';
this.httpClient.post(url,category).subscribe(result => {
  console.log(result);
  this.addresult=result;
  if(this.addresult.status==201){
    this.addmsg=this.addresult.message;
    this.addaccessdetails.reset();
  }
},
error => {
  this.error = 'Connection Interrupted..'; 
});
  }
  closemsg(){
    this.addmsg='';
    this.error='';
    this.updatemsg='';
    this.deletemsg='';
  }
 
  deletedata(deletevalue){
    if (confirm("Do you want to delete the Account Details?")) {    
      let delurl='http://10.56.65.45:8082/po/access/delete?id='+deletevalue.associateId;
   
      this.httpClient.delete(delurl).subscribe(result => {
        this.addresult=result;
        if(this.addresult.status==200){
          this.deletemsg=this.addresult.message;
          alert(this.deletemsg);
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
    console.log(updateaccessdetails)
    let modilfyurl='http://10.56.65.45:8082/po/access/update';
    let updatecategory={
      associateId :updateaccessdetails.updateassociateid,
      associateName:updateaccessdetails.updateassociatename,
      accessType:updateaccessdetails.updateaccesstype,
      activeStatus:updateaccessdetails.updatestatus};
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
      this.error = 'Connection Interrupted..'; 
    });
  }
  }
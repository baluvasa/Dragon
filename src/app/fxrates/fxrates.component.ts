import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { EventEmitterService } from '../event-emitter.service';
import { AppLink } from '../app-link';
import { HttpClient } from  "@angular/common/http";
@Component({
  selector: 'app-fxrates',
  templateUrl: './fxrates.component.html',
  styleUrls: ['./fxrates.component.scss']
})
export class FxratesComponent implements OnInit  {

searchfxform: FormGroup;
  addfxform: FormGroup;
  updatefxform: FormGroup;
  error:any;
  projects:any;
  results:any;
  project_years:any;
  associates:any;
  fxlists:any;
  addresult:any;
  role:any;
  addmsg:any;
  deletemsg:any;
  updatemsg:any;
  myDatePickerOptions=AppLink.myDatePickerOptions;
  ip=AppLink.baseURL;
  dtOptions = AppLink.DTOptions; 
  currency_codes=AppLink.billingcurrency;
  constructor(private formBuilder: FormBuilder,private eventEmitterService: EventEmitterService,private  httpClient:HttpClient) { }

  ngOnInit() {
    this.eventEmitterService.menuinvokefunction();
    if(localStorage.getItem('logeduser')=='ADMIN'){
      this.role=true;
    }
    this.searchfxform = new FormGroup({
      currency:new FormControl('',{}), 
      fxdate:new FormControl('',{})    
    })
    this.addfxform = new FormGroup({
      currency:new FormControl('',{
        validators: [Validators.required]
      }),
      fxdate:new FormControl('',{
        validators: [Validators.required]
      }),
      fxrate:new FormControl('',{
        validators: [Validators.required,Validators.minLength(2),Validators.maxLength(18),Validators.pattern('^[0-9]+(\.[0-9]{1,9})?$')]
      })
    })  
    this.updatefxform = new FormGroup({
      fxid:new FormControl('',{
        validators: [Validators.required]
      }),
      currency:new FormControl('',{
        validators: [Validators.required]
      }),
      fxdate:new FormControl('',{
        validators: [Validators.required]
      }),
      fxrate:new FormControl('',{
        validators: [Validators.required,Validators.minLength(2),Validators.maxLength(18),Validators.pattern('^[0-9]+(\.[0-9]{1,9})?$')]
      })
    })  
  }
  searchreset(){
    this.searchfxform.reset({ currency: '', fxdate: '' });
  }
searchfx_form(value){ 
  this.closemsg();
  let url='';    
  if(value.fxdate=='' || value.fxdate==null){
    url=this.ip+'/po/fx_rates/fetch?countryCode='+value.currency+'&date';
  }
  else if(value.currency=='' ||value.currency==null){
    url=this.ip+'/po/fx_rates/fetch?countryCode='+'&date='+value.fxdate.formatted;
  }
  // else if(value.fxdate==null){
  //   url=this.ip+'/po/fx_rates/fetch?countryCode='+value.currency+'&date';
  // }
  else if(value.fxdate==null && value.currency==null ){
    url=this.ip+'/po/fx_rates/fetch?countryCode='+'&date=';
  }
   else  {
    url=this.ip+'/po/fx_rates/fetch?countryCode='+value.currency+'&date='+value.fxdate.formatted;
  }
  console.log(url)
  console.log("@@@@@@@@@@@@@@",value.fxdate)
  this.httpClient.get(url).subscribe(result => {    
    this.results=result;
    if(this.results.status==200){
      this.fxlists=[];
      this.fxlists=this.results.fxRates;
    }else{
      this.fxlists=[];
      this.error=this.results.message;
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
}
deletedata(deletevalue){
  if (confirm("Do you want to delete the FX Rate?")) {    
    let delurl=this.ip+'/po/fx_rates/delete?fxId='+deletevalue.fxId;
    console.log(delurl)
    this.httpClient.delete(delurl).subscribe(result => {
      this.addresult=result;
      if(this.addresult.status==200){
        this.deletemsg=this.addresult.message;
        // alert(this.deletemsg);
        let data={currency:'',fxdate:''};
        this.searchfx_form(data);
      } 
    },
    error => {
      this.error = 'Connection Interrupted..'; 
    })  
  } 
}
add_fxdetails(value){
  // console.log(value);
  let category={currencyCode:value.currency,fxDate:value.fxdate.formatted,fxRate:value.fxrate,createdBy:'admin'};
  // console.log(category)
  let url=this.ip+'/po/fx_rates/create';
  this.httpClient.post(url,category).subscribe(result => {
    this.addresult=result;
    console.log(this.addresult)
    this.addmsg="Fx Reate Added Successfully.";
    if(this.addresult.status == 201){
      this.addmsg="Fx Reate Added Successfully.";
      this.addfxform.reset({ fxrate: '', fxdate: '' });
    }
      // this.addfxform.reset();
      // let data={currency:'',fxdate:''};
      // this.searchfx_form(data);
  },
  error => {
    this.error = 'Connection Interrupted..'; 
  });
}
setupdatemodel(fxlist){
  this.updatefxform.setValue({fxid:fxlist.fxId,currency:fxlist.currencyCode,fxdate:fxlist.fxDate,fxrate:fxlist.fxRate});
}
}

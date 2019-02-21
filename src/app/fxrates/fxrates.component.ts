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
searchfx_form(value){ 
  let url='';    
  if(value.fxdate==''){
    url=this.ip+'/po/fx_rates/fetch?countryCode='+value.currency+'&date';
  }
  else{
    url=this.ip+'/po/fx_rates/fetch?countryCode='+value.currency+'&date='+value.fxdate.formatted;
  }
  console.log(url)
  this.httpClient.get(url).subscribe(result => {    
    this.results=result;
    this.fxlists=this.results.fxRates;
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
  console.log(value);
  let category={currencyCode:value.currency,fxDate:value.fxdate.formatted,fxRate:value.fxrate,createdBy:'admin'};
  console.log(category)
  let url=this.ip+'/po/fx_rates/create';
  this.httpClient.post(url,category).subscribe(result => {
    console.log(result)
    this.addresult=result;
    if(this.addresult.status==201){
      this.addmsg=this.addresult.message;
      this.addfxform.reset();
      let data={currency:'',fxdate:''};
      this.searchfx_form(data);
    }
  },
  error => {
    this.error = 'Connection Interrupted..'; 
  });
}
setupdatemodel(fxlist){
  this.updatefxform.setValue({fxid:fxlist.fxId,currency:fxlist.currencyCode,fxdate:fxlist.fxDate,fxrate:fxlist.fxRate});
}
}

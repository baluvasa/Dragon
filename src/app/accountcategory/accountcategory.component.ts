import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { EventEmitterService } from '../event-emitter.service';
import { AppLink } from '../app-link';
import { HttpClient } from  "@angular/common/http";
@Component({
  selector: 'app-accountcategory',
  templateUrl: './accountcategory.component.html',
  styleUrls: ['./accountcategory.component.scss']
})
export class AccountcategoryComponent implements OnInit  {  
  searchaccountcategory: FormGroup;
  addaccountcategory: FormGroup;
  update_accountcategory: FormGroup;
  error='';
  adderror='';
  updateerror='';
  projects:any;
  project_years:any;
  associates:any;
  categorylists:any;  
  role:any;
  ip=AppLink.baseURL;
  dtOptions = AppLink.DTOptions; 
  results:any;
  datas:any;  
  addresult:any;
  searchresult:any;
  addmsg='';
  updatemsg='';
  deletemsg='';
  datalists:any;
  constructor(private eventEmitterService: EventEmitterService,private formBuilder: FormBuilder,private  httpClient:HttpClient) { }
  ngOnInit() {    
    this.eventEmitterService.menuinvokefunction(); 
    if(localStorage.getItem('logeduser')=='ADMIN'){
      this.role=true;
    }
    this.searchaccountcategory = new FormGroup({
      search_account_category:new FormControl('',{}),
      search_account_name:new FormControl('',{})
    })
    this.addaccountcategory = new FormGroup({
      add_account_category:new FormControl('',{
        validators: [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(1),
          Validators.pattern('^[a-zA-Z][a-zA-Z0-9 ]*[a-zA-Z0-9]$') 
        ]
      }),
      add_account_name:new FormControl('',{
        validators: [ 
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(1),
          Validators.pattern('^[a-zA-Z][a-zA-Z0-9 ]*[a-zA-Z0-9]$') 
        ]
      })
    })
    this.update_accountcategory = new FormGroup({
      update_account_category_id:new FormControl('',{
        validators: [Validators.required]
      }),
      update_account_category:new FormControl('',{
        validators: [Validators.required]
      }),
      update_account_name:new FormControl('',{
        validators: [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(5),
          Validators.pattern('^[a-zA-Z][a-zA-Z0-9 ]*[a-zA-Z0-9]$') 
        ]
      })
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
add_account_category_data(addaccountcategory){
  let category={accountCategory:addaccountcategory.add_account_category,accountName:addaccountcategory.add_account_name,createdBy:'admin'};
  let url=this.ip+'/po/account_category/create';
  this.httpClient.post(url,category).subscribe(result => {
    this.addresult=result;
    if(this.addresult.status==201){
      this.addmsg=this.addresult.message;
      this.addaccountcategory.reset();
      let data={search_account_category:'',search_account_name:''};
        this.search_accountcategory(data);
    }   else if(this.addresult.status==409){
      this.addmsg=this.addresult.message;    
    }
  },
  error => {
    this.adderror = 'Connection Interrupted..'; 
  });
} 
setupdatemodel(categorylist){
  this.update_accountcategory.setValue({update_account_category_id:categorylist.accountCategoryId,update_account_category:categorylist.accountCategory,update_account_name:categorylist.accountName});
}
update_account_category_data(updateaccountcategory){  
  let modilfyurl=this.ip+'/po/account_category/update';
  let updatecategory={accountCategoryId :updateaccountcategory.update_account_category_id,accountName:updateaccountcategory.update_account_name,modifiedBy:'admin'};  console.log(updatecategory)
  this.httpClient.put(modilfyurl,updatecategory).subscribe(result => {
    this.addresult=result;
    if(this.addresult.status==200){
      this.updatemsg=this.addresult.message;
      let data={search_account_category:'',search_account_name:''};
      this.search_accountcategory(data);
    }
  },
  error => {
    this.updateerror = 'Connection Interrupted..'; 
  });
}
search_accountcategory(value){ 
  console.log(value.search_account_category.length)
  console.log(value.search_account_name.length)
  let url='';
  if((value.search_account_category.length==0 && value.search_account_name.length==0)||(value.search_account_category==null && value.search_account_name==null)){
    url=this.ip+'/po/account_category/fetch?accountCategory=&accountName=';
  }
  else{
    url=this.ip+'/po/account_category/fetch?accountCategory='+value.search_account_category+'&accountName='+value.search_account_name;
  }
  console.log(url)
  this.httpClient.get(url).subscribe(result => {    
    this.results=result;
      this.categorylists=this.results.accountCategory;
  },
  error => {
    this.error = 'Connection Interrupted..'; 
  });
}
deletedata(deletevalue){
  if (confirm("Do you want to delete the Account Details?")) {    
    let delurl=this.ip+'/po/account_category/delete?accountCategoryId='+deletevalue.accountCategoryId;
    this.httpClient.delete(delurl).subscribe(result => {
      this.addresult=result;
      if(this.addresult.status==200){
        this.deletemsg=this.addresult.message;
        alert(this.deletemsg);
        let data={search_account_category:'',search_account_name:''};
        this.search_accountcategory(data);
      } 
    },
    error => {
      this.error = 'Connection Interrupted..'; 
    })  
  } 
}
}
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
  projects:any;
  project_years:any;
  associates:any;
  categorylists:any;
  dtOptions: any = {};
  role:any;
  ip=AppLink.baseURL;
  results:any;
  datas:any;  
  addresult:any;
  searchresult:any;
  addmsg='';
  updatemsg='';
  deletemsg='';
  constructor(private eventEmitterService: EventEmitterService,private formBuilder: FormBuilder,private  httpClient:HttpClient) { }

  ngOnInit() {
    
    this.eventEmitterService.menuinvokefunction(); 
    if(localStorage.getItem('logeduser')=='admin'){
      this.role=true;
    }

    this.projects=[
      {name:'GE Industrial'},
      {name:'GE INDIA EXPORTS PVT LTD'},
      {name:'GE Oil & Gas'},
      {name:'GE P&W'},
      {name:'GE Packaged Power'},
      {name:'GE Ticketless'}
    ];
    this.project_years=[
      {year_month:'10'},
      {year_month:'30'},
      {year_month:'15'},
      {year_month:'45'}  
    ];
    this.associates=[
      {associateid:'GE Ticketless'},
      {associateid:'GE P&W'},
      {associateid:'GE Oil & Gas  '},
      {associateid:'GE Turbines'}  
    ];
    this.searchaccountcategory = new FormGroup({
      search_account_category:new FormControl('',{}),
      search_account_name:new FormControl('',{})
    })
    this.addaccountcategory = new FormGroup({
      add_account_category:new FormControl('',{
        validators: [Validators.required]
      }),
      add_account_name:new FormControl('',{
        validators: [Validators.required]
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
        validators: [Validators.required]
      })
    })

    
    this.dtOptions = {
        dom: 'Bfrtip',
        lengthMenu: [
            [ 10, 25, 50, -1 ],
            [ '10 rows', '25 rows', '50 rows', 'Show all' ]
        ],
        pagingType: 'full_numbers',
        buttons: [
          'pageLength',
          'colvis',
          'excel'
        ]
      };   
  }

  closemsg(){
    this.addmsg='';
    this.error='';
    this.updatemsg='';
  }
//   nodata(){
//     this.error="No Data Found";
// }
// exception(){
//     this.error="Exception has occurred while Fetching the Data";
// }
// badrequest(){
//     this.error="Bad Request";
// }
add_account_category_data(addaccountcategory){
  let category={accountCategory:addaccountcategory.add_account_category,accountName:addaccountcategory.add_account_name};
  let url=this.ip+'/po/account_category/create';
  this.httpClient.post(url,category).subscribe(result => {
    this.addresult=result;
    if(this.addresult.status==201){
      this.addmsg=this.addresult.message;
      this.addaccountcategory.reset();
    }
  },
  error => {
    this.error = 'Connection Interrupted..'; 
  });
} 
setupdatemodel(categorylist){
  this.update_accountcategory.setValue({update_account_category_id:categorylist.accId,update_account_category:categorylist.accountCategory,update_account_name:categorylist.accountName});
}
update_account_category_data(updateaccountcategory){  
  let modilfyurl=this.ip+'/po/account_category/update';
  let updatecategory={accId :updateaccountcategory.update_account_category_id,accountName:updateaccountcategory.update_account_name};
  this.httpClient.put(modilfyurl,updatecategory).subscribe(result => {
    this.addresult=result;
    if(this.addresult.status==200){
      this.updatemsg=this.addresult.message;
      let data={search_account_category:'',search_account_name:''};
      this.search_accountcategory(data);
    }
  },
  error => {
    this.error = 'Connection Interrupted..'; 
  });
}
search_accountcategory(value){ 
  let url=this.ip+'/po/account_category/fetch?category='+value.search_account_category+'&name='+value.search_account_name;
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
    let delurl=this.ip+'/po/account_category/delete?id='+deletevalue.accId;
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


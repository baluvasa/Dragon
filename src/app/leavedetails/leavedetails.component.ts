import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';
import { EventEmitterService } from '../event-emitter.service';
import { AppLink } from '../app-link';
import { HttpClient } from  "@angular/common/http";
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-leavedetails',
  templateUrl: './leavedetails.component.html',
  styleUrls: ['./leavedetails.component.scss']
})
export class LeavedetailsComponent implements OnInit {
  leaveform: FormGroup;
  addleaveform: FormGroup;
  error:any;
  adderrormsg:any;
  // projects:any;
  searchallleaves:any;
  
  valuedelete:any;
  results:any;
  updatemsg:any;
  updateerror:any;
  updateleavedetails: FormGroup;
  addresult:any;
  addmsg:any;
  project_years:any;
  associates:any;
  leavelists:any;
  deletemsg:any;
  ip=AppLink.baseURL;
  dtOptions = AppLink.DTOptions;   
  myDatePickerOptions=AppLink.myDatePickerOptions;
  role:any;
  constructor(private formBuilder: FormBuilder,private eventEmitterService: EventEmitterService,private  httpClient:HttpClient) { }

  ngOnInit() {
    this.eventEmitterService.menuinvokefunction();
    if(localStorage.getItem('logeduser')=='ADMIN'){
      this.role=true;
      console.log("role",this.role)
    }

    
    this.project_years=[
      {year_month:'Jan-2019'},
      {year_month:'Feb-2019'},
      {year_month:'Mar-2019'},
      {year_month:'Apr-2019'}  
    ];
    this.associates=[
      {associateid:'505050', name:"Vijay Krishna"},
      {associateid:'505051', name:"Vishal Gourav"},
      {associateid:'505052', name:"Balu Vasa"},
      {associateid:'505053', name:"Mani Bandari"}  
    ];
    this.leaveform = new FormGroup({
      associateid:new FormControl('',{}),
      associatename:new FormControl('',{}),    
      yearmonth:  new FormControl('',{})  
    })
  
    this.updateleavedetails = new FormGroup({
      updleaveid:new FormControl('',{}),
      updassociateid:new FormControl('',{}),
      updassociatename:new FormControl('',{}),    
      upddate:new FormControl('',{ }),
      updremark:new FormControl('',{ validators: 
        Validators.required})   
    })
   
    this.addleaveform = new FormGroup({
      addassociateid:new FormControl('',{
        validators: [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
          Validators.pattern('^[a-zA-Z]+[0-9]{1,8}$'),
        ]
      }),    
     
      addassociatename:new FormControl('', {
        validators: [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(5),
          Validators.pattern('^[a-zA-Z ]+[a-zA-Z]{1,20}$'),
        ]
      }),
      adddate:new FormControl('',{
        validators: 
          Validators.required,
      }) ,    
      addremarks:new FormControl('',{
        validators: 
        Validators.required,
      }) ,
    })  
  }
  searchreset(){
    this.leaveform.reset({ associateid: '', associatename: '',yearmonth:'' });
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

  searchleaves(value){
    console.log(value)
    let url='';
    if(value.associateid==null && value.associatename==null && value.yearmonth==null || value.yearmonth==undefined ){
      url=this.ip+'/po/leaves/fetch?id=&name=&mmyy=';
     
      // url=this.ip+'/po/access/fetch?id='+value.associateid+'&name=+value.associateid&mmyy=';
      console.log("onlywithassid",url)
    }
    
    else{
      url=this.ip+'/po/leaves/fetch?id='+value.associateid+'&name='+value.associatename+'&mmyy='+value.yearmonth;
    console.log("valueatyear",url)
    }
   
    console.log(url)
    this.httpClient.get(url).subscribe(result => {    
      this.results=result;
      this.searchallleaves=this.results.leavesDetails;
      console.log("@@@@@@@@@@@",this.searchallleaves);
      
    },
    error => {
      this.error = 'Connection Interrupted..'; 
    });
  }
  
  closedmsg(){
    alert("Do you really want to cancel the operation???")
  };

addleaves(value){
  {
    let leaveadd={associateId:value.addassociateid,associateName:value.addassociatename,leaveDate:value.adddate.formatted,remarks:value.addremarks,createdBy:'admin'};
    console.log("++++++",leaveadd)
    let url=this.ip+'/po/leaves/create ';
    this.httpClient.post(url,leaveadd).subscribe(result => {
      this.addresult=result;
      console.log("AAAAAAAAAAAAAAAAAAAAAAA",this.addresult)
      if(this.addresult.status==201){
        this.addmsg=this.addresult.message;
        this.addleaveform.reset();
      }
      else if(this.addresult.status==409){
        this.addleaveform.reset();
        this.adderrormsg=this.addresult.message;
      }
    },
    error => {
      this.error = 'Connection Interrupted..'; 
    });

  }
}
setupdatemodel(searchleavelist){
  console.log(searchleavelist);
  this.updateleavedetails.setValue(
    {
      updleaveid:searchleavelist.leaveId,
      updassociateid:searchleavelist.associateId,
      updassociatename:searchleavelist.associateName,
      upddate:searchleavelist.leaveDate,
      updremark:searchleavelist.remarks
    
    });
    console.log(searchleavelist)
  }
  update_leavedetails(updateleavedetails){    
    let modilfyurl=this.ip+'/po/leaves/update';
    let updateleavedata={
      leaveId :updateleavedetails.updleaveid,
      associateId :updateleavedetails.updassociateid,
      associateName:updateleavedetails.updassociatename,
      leaveDate:updateleavedetails.upddate,
      remarks:updateleavedetails.updremark,
      modifiedBy:'admin'};
      console.log(updateleavedata)
      this.httpClient.put(modilfyurl,updateleavedata).subscribe(result => {
        this.addresult=result;
        console.log(this.addresult)
        if(this.addresult.status==200){
          this.updatemsg=this.addresult.message;
          let data={associateid:'',associatename:'',date:'',remarks:''};
          this.searchleaves(data);
         
        }
      },
      error => {
        this.updateerror = 'Connection Interrupted..'; 
      });
    }
    deletedata(delvalue){
      console.log("val",delvalue)

      if (confirm("Do you want to delete the Leave Details?")) {    
        let delurl=this.ip+'/po/leaves/delete?id='+delvalue.leaveId;
        this.httpClient.delete(delurl).subscribe(result => {
          this.addresult=result;
          console.log(this.addresult)
          if(this.addresult.Status==200){
            this.deletemsg=this.addresult.message;
            console.log(this.deletemsg)
            // alert(this.deletemsg);
            let data={associateid:'',associatename:'',date:'',remarks:''};
            this.searchleaves(data);
          } 
        },
        error => {
          this.error = 'Connection Interrupted..'; 
        })  
      } 
    }
  
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { EventEmitterService } from '../event-emitter.service';
import { AppLink } from '../app-link';
import { HttpClient } from  "@angular/common/http";

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {
  error:any;
  list:any;  
  holidayform:FormGroup;
  holidaylistform:FormGroup;
  holidayeditlistform:FormGroup;
  projects:any;
  years:any;
  year:any;
  project=null;
  year_default=0;
  jan:any;
  feb:any;
  mar:any;
  Apr:any;
  may:any;
  ip=AppLink.baseURL;
  dtOptions = AppLink.DTOptions; 
  role:any;
  holidaysinfo:any;
  account_names:any;
  results:any;
  holidayslists:any;
  addresult:any;
  deletemsg="";
  addmsg:any;
  constructor(private formBuilder: FormBuilder,private eventEmitterService: EventEmitterService,private  httpClient:HttpClient) { 
  }
  
  ngOnInit() {
    this.eventEmitterService.menuinvokefunction();
    this.holidaysinfo=[
      {sno:'1',projectname:'GE Energy-NPI Support-ICFC Pro',month:'Sep',year:'2018',count:'8'},
      {sno:'2',projectname:'GE Energy-NPI Support-ICFC Pro',month:'Oct',year:'2018',count:'11'},
      {sno:'3',projectname:'GE Energy-NPI Support-ICFC Pro',month:'Nov',year:'2018',count:'9'},
      {sno:'4',projectname:'GE Energy-NPI Support-ICFC Pro',month:'Dec',year:'2018',count:'10'},      
      {sno:'5',projectname:'GE Energy-NPI Support-ICFC Pro',month:'Jan',year:'2019',count:'8'},
      {sno:'6',projectname:'GE Energy-NPI Support-ICFC Pro',month:'Feb',year:'2019',count:'9'},
      {sno:'7',projectname:'GE Energy-NPI Support-ICFC Pro',month:'Mar',year:'2019',count:'10'},
      {sno:'8',projectname:'GE Energy-NPI Support-ICFC Pro',month:'Apr',year:'2019',count:'11'},
      {sno:'9',projectname:'GE Energy-NPI Support-ICFC Pro',month:'May',year:'2019',count:'9'},
      {sno:'10',projectname:'IES_GE O&G-Vetco Gray Inc-ES',month:'Jan',year:'2019',count:'8'},
      {sno:'11',projectname:'IES_GE O&G-Vetco Gray Inc-ES',month:'Feb',year:'2019',count:'9'},
      {sno:'12',projectname:'IES_GE O&G-Vetco Gray Inc-ES',month:'Mar',year:'2019',count:'10'},
      {sno:'13',projectname:'IES_GE O&G-Vetco Gray Inc-ES',month:'Apr',year:'2019',count:'11'},
      {sno:'14',projectname:'IES_GE O&G-Vetco Gray Inc-ES',month:'May',year:'2019',count:'8'},
      {sno:'15',projectname:'IES_GE O&G-Vetco Gray Inc-ES',month:'Jun',year:'2019',count:'10'},
      {sno:'16',projectname:'GE Energy - Industrial',month:'Oct',year:'2018',count:'9'},
      {sno:'17',projectname:'GE Energy - Industrial',month:'Nov',year:'2018',count:'10'},
      {sno:'18',projectname:'GE Energy - Industrial',month:'Dec',year:'2018',count:'9'},
      {sno:'19',projectname:'GE Energy - Industrial',month:'Jan',year:'2019',count:'8'},
      {sno:'20',projectname:'GE Energy - Industrial',month:'Feb',year:'2019',count:'8'},
      {sno:'21',projectname:'AVS 6 months',month:'Jan',year:'2019',count:'9'},
      {sno:'22',projectname:'AVS 6 months',month:'Feb',year:'2019',count:'8'},
      {sno:'23',projectname:'AVS 6 months',month:'Mar',year:'2019',count:'8'},
      {sno:'24',projectname:'AVS 6 months',month:'Apr',year:'2019',count:'10'},
      {sno:'25',projectname:'AVS 6 months',month:'May',year:'2019',count:'11'}
    ];
    if(localStorage.getItem('logeduser')=='admin'){
      this.role=true;
    }
    
    this.projects =[
      {projectname:'GE Energy-NPI Support-ICFC Pro',pid:'000000000029531'},
      {projectname:'IES_GE O&G-Vetco Gray Inc-ES',pid:'C02000013006600'},
      {projectname:'GE Energy - Industrial',pid:'12004711'},
      {projectname:'AVS 6 months',pid:'000000000029578'}
    ];
    this.account_names=[
      {acc_name:'Bhaskar V PO',acc_name_code:'bvp'},
      {acc_name:'HTC (Jul18)',acc_name_code:'htc'},
      {acc_name:'Patrick Old',acc_name_code:'patold'},
      {acc_name:'Aero',acc_name_code:'aero'},
      {acc_name:'Ommi Gopi',acc_name_code:'ommi'},
      {acc_name:'AVS__1st half',acc_name_code:'avs1st'}
    ];
    this.years =[
      {years:"2018"},
      {years:"2019"},
      {years:"2020"}
    ];


    this.holidayform = new FormGroup({
      search_account_category:new FormControl('',{
        validators: [Validators.required]
      }),
      search_account_name:new FormControl('',{
        validators: [Validators.required]
      }),
      search_project_name:new FormControl('',{
        validators: []
      }),
      search_holidays_years:new FormControl('',{
        validators: []
      })
    })
    this.holidaylistform = new FormGroup({
      add_account_category:new FormControl('',{
        validators: [Validators.required]
      }),
      add_account_name:new FormControl('',{
        validators: [Validators.required]
      }),
      add_project_name:new FormControl('',{
        validators: [Validators.required]
      }),
      add_holiday_year:new FormControl('',{
        validators: [Validators.required]
      }),
      holiday_jan:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      }),
      holiday_feb:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(28)]
      }),
      holiday_mar:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      }),
      holiday_apr:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(30)]
      }),
      holiday_may:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      }),
      holiday_jun:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(30)]
      }),
      holiday_jul:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      }),
      holiday_aug:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      }),
      holiday_sep:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(30)]
      }),
      holiday_oct:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      }),
      holiday_nov:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(30)]
      }),
      holiday_dec:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      })
    })
    this.holidayeditlistform = new FormGroup({
      projecteditlist:new FormControl('',{
        validators: [Validators.required]
      }),
      yeareditlist:new FormControl('',{
        validators: [Validators.required]
      }),
      jan_edit:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      }),
      feb_edit:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(28)]
      }),
      mar_edit:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      }),
      Apr_edit:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(30)]
      }),
      may_edit:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      }),
      jun_edit:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(30)]
      }),
      jul_edit:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      }),
      aug_edit:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      }),
      sep_edit:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(30)]
      }),
      oct_edit:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      }),
      nov_edit:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(30)]
      }),
      dec_edit:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      })
    })
   
  }
  onSubmit(a){
    console.log(a)
  }
  search_holidays_details(value){  
    //let url=this.ip+'/po/holidays/fetch?accountCategory='+asd+'&accountName='+asd+'&projectName='+asd+'&year='+value.search_account_name;
    let url=this.ip+'/po/holidays/fetch?accountCategory='+value.search_account_category+'&accountName='+value.search_account_name+'&projectName='+value.search_project_name+'&year='+value.search_holidays_years;
    this.httpClient.get(url).subscribe(result => {    
        this.results=result;
        this.holidayslists=this.results.holidaysDetails;
    },
    error => {
      this.error = 'Connection Interrupted..'; 
    });
  

    // this.list = [
    //   {account_category:'GE India Exports Pvt. Ltd.',account_name:'SQL PO',project_name:'GE Energy-NPI Support-ICFC Pro',Year:2018,days:104},
    //   {account_category:'GE Oil & Gas',account_name:'Patrick Old',project_name:'HYDRIL USA Distribution LLC',Year:2019,days:104},
    //   {account_category:'GE Packaged Power',account_name:'Aero',project_name:'IES_SHOULD COSTING-ES',Year:2018,days:104}      
    // ];
    
  }
  errordata() {
    this.error = 'no data found';
  }
  errorexceptiondata() {
    this.error = 'Exception has occurred while fetching holiday details';
  }
  badrequest() {
    this.error="Bad Request";
  }
  reset()
  {
    // this.edit=0;
    this.year_default=0;
    // this.holidayform.reset(); 
  }
//   saveholidayinfo(a)
//   {
//  console.log(a);
//     // this.holidaylistform.reset();
   
//     alert("Data Added Successfully")
//   }
  saveholidayeditinfo()
  {
 
    this.holidayeditlistform.reset();
     alert("Data updated Successfully")
  }

  add_holiday_list_form(addholidaydata){
    console.log(addholidaydata);
    let holidays={
            accountCategory: addholidaydata.add_account_category,
            accountName: addholidaydata.add_account_name,
            year: addholidaydata.add_holiday_year,
            projectName:  addholidaydata.add_project_name,
            january: addholidaydata.holiday_jan,
            february:  addholidaydata.holiday_feb,
            march: addholidaydata.holiday_mar,
            april:  addholidaydata.holiday_apr,
            may: addholidaydata.holiday_may,
            june: addholidaydata.holiday_jun,
            july: addholidaydata.holiday_jul,
            august:  addholidaydata.holiday_aug,
            september:  addholidaydata.holiday_sep,
            october: addholidaydata.holiday_oct,
            november: addholidaydata.holiday_nov,
            december: addholidaydata.holiday_dec,
            createdBy: 'admin'
          };
    let url=this.ip+'/po/holidays/add ';
    this.httpClient.post(url,holidays).subscribe(result => {
      this.addresult=result;
      if(this.addresult.status==201){
        this.addmsg=this.addresult.message;
        this.holidaylistform.reset();
      }
    },
    error => {
      this.error = 'Connection Interrupted..'; 
    });

  }
  delete_hoilday_data(delete_data){

    if (confirm("Do you want to delete the Account Details?")) {    
      let delurl=this.ip+'/po/holidays/delete?id='+delete_data.id;
      this.httpClient.delete(delurl).subscribe(result => {
        this.addresult=result;
        if(this.addresult.status==200){
          this.deletemsg=this.addresult.message;
          alert(this.deletemsg);
          let data={
            search_account_category:'',
            search_account_name:'',
            search_project_name:'',
            search_holidays_years:''
          };
          this.search_holidays_details(data);
        } 
      },
      error => {
        this.error = 'Connection Interrupted..'; 
      })
    
    } 
  }

}

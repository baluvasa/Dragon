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
  error="";
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
  addmsg:any;
  updatemsg="";
  deletemsg="";

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
      edit_account_category:new FormControl('',{
        validators: [Validators.required]
      }),
      edit_account_name:new FormControl('',{
        validators: [Validators.required]
      }),
      edit_project_name:new FormControl('',{
        validators: [Validators.required]
      }),
      edit_project_year:new FormControl('',{
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

  update_holiday_modal_screen(holidaylist){

    this.holidayeditlistform.setValue({
      edit_account_category:holidaylist.accountCategory,
      edit_account_name:holidaylist.accountName,
      edit_project_name:holidaylist.projectName,
      edit_project_year:holidaylist.year,
      jan_edit:holidaylist.january,
      feb_edit:holidaylist.february,
      mar_edit:holidaylist.march,
      Apr_edit:holidaylist.april,
      may_edit:holidaylist.may,
      jun_edit:holidaylist.june,
      jul_edit:holidaylist.july,
      aug_edit:holidaylist.august,
      sep_edit:holidaylist.september,
      oct_edit:holidaylist.october,
      nov_edit:holidaylist.november,
      dec_edit:holidaylist.december
    });
  }

  closemsg(){
    this.addmsg='';
    this.error='';
    this.updatemsg='';
  }
  add_holiday_list_form(addholidaydata){
    let holidays={
            accountCategory: addholidaydata.add_account_category,
            accountName: addholidaydata.add_account_name,
            projectName:  addholidaydata.add_project_name,
            year: addholidaydata.add_holiday_year,
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

    if (confirm("Do you want to delete the Holiday Details?")) {    
      let delurl=this.ip+'/po/holidays/delete?accountCategory='+delete_data.accountCategory+'&accountName='+delete_data.accountName+'&projectName='+delete_data.projectName+'&year='+delete_data.year;
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



  // For Updating Holidays for any selected year

  update_holiday_list_form(update_data)
  {
    let modilfyurl=this.ip+'/po/holidays/modify';  
    let updateholidaylist={
      accountCategory: update_data.edit_account_category,
      accountName: update_data.edit_account_name,
      year:  update_data.edit_project_year,
      projectName: update_data.edit_project_name,
      january: update_data.jan_edit,
      february:  update_data.feb_edit,
      march: update_data.mar_edit,
      april:  update_data.Apr_edit,
      may: update_data.may_edit,
      june: update_data.jun_edit,
      july: update_data.jul_edit,
      august: update_data.aug_edit,
      september: update_data.sep_edit,
      october: update_data.oct_edit,
      november: update_data.nov_edit,
      december: update_data.dec_edit,
      modifiedBy: 'admin'
    };
     this.httpClient.put(modilfyurl,updateholidaylist).subscribe(result => {
       this.addresult=result;
       if(this.addresult.status==200){
         this.updatemsg=this.addresult.message;
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
     });
 
  }

}

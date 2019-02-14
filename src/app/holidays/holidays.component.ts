import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { EventEmitterService } from '../event-emitter.service';
import { AppLink } from '../app-link';

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
  // edit=0;
  // yr=0;
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
  constructor(private formBuilder: FormBuilder,private eventEmitterService: EventEmitterService) { 
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
      project:new FormControl('',{
        validators: [Validators.required]
      }),
      yearlist:new FormControl('',{
        validators: [Validators.required]
      }),
      project_name:new FormControl('',{
        validators: []
      })
    })
    this.holidaylistform = new FormGroup({
      projectlist:new FormControl('',{
        validators: [Validators.required]
      }),
      yearlist:new FormControl('',{
        validators: [Validators.required]
      }),
      jan:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      }),
      feb:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(28)]
      }),
      mar:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      }),
      Apr:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(30)]
      }),
      may:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      }),
      jun:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(30)]
      }),
      jul:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      }),
      aug:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      }),
      sep:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(30)]
      }),
      oct:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(31)]
      }),
      nov:new FormControl('',{
        validators: [Validators.required,Validators.maxLength(2),Validators.min(0),Validators.max(30)]
      }),
      dec:new FormControl('',{
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
  getData(){   
    this.list = [
      {account_category:'GE India Exports Pvt. Ltd.',account_name:'SQL PO',project_name:'GE Energy-NPI Support-ICFC Pro',Year:2018,days:104},
      {account_category:'GE Oil & Gas',account_name:'Patrick Old',project_name:'HYDRIL USA Distribution LLC',Year:2019,days:104},
      {account_category:'GE Packaged Power',account_name:'Aero',project_name:'IES_SHOULD COSTING-ES',Year:2018,days:104}      
    ];
    
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
  deletedata(){
    if (confirm("Do you want to delete Holidays For the Year?")) {
      alert("Holiday Details Deleted Successfully.")
    } 
  }
  sendvalues(q){
    console.log(q);
  }
}

import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss']
})

export class CreateprojectComponent implements OnInit {  
  
  projectsearchform: FormGroup;
  projectcreateform: FormGroup;
  categories:any;
  projects:any;
  types:any;
  statuses:any;
  error:any;
  acc_category_default=0;
  project_name_default=0;
  acc_category_default1=0;
  acc_category_default2=0;
  project_name_default1=0;
  approval_default=0;
  submission_default=0;
  type_default=0;
  status_default=0;
  type_default1=0;
  status_default1=0;
  role:any;
  projectlists:any;
  dtOptions:any;
  approvalmethods:any;
  currency_modes:any;
  resources:any;
  categories_names:any;
  submisson_modes:any;
  constructor(private formBuilder: FormBuilder,private eventEmitterService: EventEmitterService) {}
  ngOnInit() {
    this.eventEmitterService.menuinvokefunction();
    if(localStorage.getItem('logeduser')=='admin'){
      this.role=true;
    }
    this.dtOptions = {
      
      dom: 'Bfrtip',
      lengthMenu: [
        [ 10, 25, 50, -1 ],
        [ '10 rows', '25 rows', '50 rows', 'Show all' ]
      ],
      pagingType: 'full_numbers',
      scrollX: true,
      buttons: [
        'pageLength',
        'colvis',
        'excel'
      ]
    };
    // this.categories=[
    //   {acc_category:"GE India Exports Pvt. Ltd.",code:"giepl"},
    //   {acc_category:"GE Industrial - US India",code:"giui"},
    //   {acc_category:"GE Oil & Gas",code:"gog"},
    //   {acc_category:"GE Packaged Power",code:"gpp"},
    //   {acc_category:"GE Power & Water",code:"gpw"},
    //   {acc_category:"Amphenol",code:"amp"}
    // ];
    this.categories=[
      {acc_category:"GE India Exports Pvt. Ltd.",code:"giepl",acc_name:'Bhaskar V PO',acc_name_code:'bvp'},
      {acc_category:"GE Industrial - US India",code:"giui",acc_name:'HTC (Jul18)',acc_name_code:'htc'},
      {acc_category:"GE Oil & Gas",code:"gog",acc_name:'Patrick Old',acc_name_code:'patold'},
      {acc_category:"GE Packaged Power",code:"gpp",acc_name:'Aero',acc_name_code:'aero'},
      {acc_category:"GE Power & Water",code:"gpw",acc_name:'Ommi Gopi',acc_name_code:'ommi'},
      {acc_category:"Amphenol",code:"amp",acc_name:'AVS__1st half',acc_name_code:'avs1st'}
    ];
    this.projects =[
      {projectname:'GE Energy-NPI Support-ICFC Pro',pid:'000000000029531'},
      {projectname:'IES_GE O&G-Vetco Gray Inc-ES',pid:'C02000013006600'},
      {projectname:'GE Energy - Industrial',pid:'12004711'},
      {projectname:'AVS 6 months',pid:'000000000029578'}
    ];
    this.types=[
      {type:'Time & Meterial',code:'tm'},
      {type:'Fixed Price',code:'fp'}
    ];
    this.statuses=[
      {status:'In Active',code:'iac'},
      {status:'Active',code:'ac'}
    ];
    this.approvalmethods=[
      {status:'Customer Mail',code:'CM'}
    ];
    this.submisson_modes=[
      {status:'EMail',code:'email'},{status:'EMail/Hard Copy',code:'ehcopy'},{status:'NA',code:'na'}
    ];
    this.currency_modes=[      
      {name:'USD',country:'US Dollar'},
      {name:'JPY',country:'Yen'},
      {name:'EUR',country:'Euro'},
    ];
    this.resources=[      
      {id:'MK00123456',name:'Venkatesh',band:'U1',start_date:'01-Jan-2019',end_date:'29-Feb-2019'},
      {id:'SP00234567',name:'Swayam',band:'U2',start_date:'01-Jan-2019',end_date:'29-Feb-2019'},
      {id:'GC00345678',name:'Chandra',band:'U3',start_date:'01-Jan-2019',end_date:'29-Feb-2019'},
      {id:'KM00456789',name:'Krishna',band:'U4',start_date:'01-Jan-2019',end_date:'29-Feb-2019'}
    ];
    this.projectsearchform = new FormGroup({
      acc_category:new FormControl('',{
        validators: []
      }),
      project_name:new FormControl('',{
        validators: []
      }),
      type:new FormControl('',{
        validators: []
      }),
      status:new FormControl('',{
        validators: []
      })
    })
    this.projectcreateform = new FormGroup({
      acc_category:new FormControl('',{
        validators: []
      }),
      acc_name:new FormControl('',{
        validators: []
      }),
      project_name:new FormControl('',{
        validators: []
      }),
      customer_name:new FormControl('',{
        validators: []
      }),
      customer_spoc:new FormControl('',{
        validators: []
      }),
      approval_method:new FormControl('',{
        validators: []
      }),
      submission_mode:new FormControl('',{
        validators: []
      }),
      project_type:new FormControl('',{
        validators: []
      }),
      billing_currency:new FormControl('',{
        validators: []
      }),
      po_amount:new FormControl('',{
        validators: []
      }),
      start_date:new FormControl('',{
        validators: []
      }),
      end_date:new FormControl('',{
        validators: []
      }),
      type:new FormControl('',{
        validators: []
      }),
      status:new FormControl('',{
        validators: []
      }),
      delivery_spoc:new FormControl('',{
        validators: []
      }),
      effort_spoc:new FormControl('',{
        validators: []
      }),
      pid:new FormControl('',{
        validators: []
      }),
      quote_id:new FormControl('',{
        validators: []
      }),
      contract_id:new FormControl('',{
        validators: []
      }),
      po_id:new FormControl('',{
        validators: []
      })
    })
  }  
  errordata() {
    this.error = 'no data found';
  }
  errorexceptiondata() {
    this.error = 'Exception has occurred while fetching Project details';
  }
  badrequest() {
    this.error="Bad Request";
  }
  onSubmit(a){
    console.log(a)
  }
  deletedata(){
    if (confirm("Do you want to delete the Project Details?")) {
    alert("Project Details Deleted Successfully.")
    } 
    } 
    onChange(a){
console.log(this.acc_category_default1)
    }
  getData(){
    this.projectlists=[
      {account_category:'GE India Exports Pvt. Ltd.',account_name:'SQL PO',project_name:'GE Energy-NPI Support-ICFC Pro',start_date:'16-Jul-2018',end_date:'13-Aug-2018',resource_count:'8',po_amount:'184800',currency:'INR',type:'TIME & MATERIAL',status:'In Active'
    },
      {account_category:'GE Oil & Gas',account_name:'Patrick Old',project_name:'HYDRIL USA Distribution LLC',start_date:'23-Oct-2017',end_date:'22-Apr-2018',resource_count:'1',po_amount:'65877.50000000',currency:'EUR',type:'TIME & MATERIAL',status:'In Active'
    },
      {account_category:'GE Packaged Power',account_name:'Aero',project_name:'IES_SHOULD COSTING-ES',start_date:'1-Jan-18',end_date:'30-Jun-18',resource_count:'10',po_amount:'170000.00',currency:'JPY',type:'FIXED PRICE',status:'In Active'
    }
  ];
}
}

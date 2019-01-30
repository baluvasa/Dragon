import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss']
})
export class CreateprojectComponent implements OnInit {  
  projectsearchform: FormGroup;
  categories:any;
  projects:any;
  types:any;
  statuses:any;
  error:any;
  acc_category_default=0;
  project_name_default=0;
  type_default=0;
  status_default=0;
  role:any;
  projectlists:any;
  dtOptions:any;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
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
    this.categories=[
      {acc_category:"GE India Exports Pvt. Ltd.",code:"giepl"},
      {acc_category:"GE Industrial - US India",code:"giui"},
      {acc_category:"GE Oil & Gas",code:"gog"},
      {acc_category:"GE Packaged Power",code:"gpp"},
      {acc_category:"GE Power & Water",code:"gpw"},
      {acc_category:"Amphenol",code:"amp"}
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';


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
  edit=0;
  yr=0;
  dtOptions: any = {};
  role:any;
  constructor(private formBuilder: FormBuilder) { 
  }
  
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
        buttons: [
          'pageLength',
          'colvis',
          'excel'
        ]
      };
    
    this.projects =[
      {projectname:"proj1"},
      {projectname:"proj2"},
      {projectname:"proj3"},
      {projectname:"proj4"},
      {projectname:"proj5"},
      {projectname:"proj6"},
      {projectname:"proj7"},
      {projectname:"proj8"}
    ];
    this.years =[
      {years:"2018"},
      {years:"2018"},
      {years:"2019"},
      {years:"2020"}
    ];


    this.holidayform = new FormGroup({
      project:new FormControl('',{
        validators: [Validators.required]
      }),
      year:new FormControl('',{
        validators: [Validators.required]
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
  
  getData(){    
    this.list = [
      {sno:1,Projectname:'abc1',Year:2018,days:21},
      {sno:2,Projectname:'abc2',Year:2018,days:21},
      {sno:3,Projectname:'abc3',Year:2018,days:21},
      {sno:4,Projectname:'abc4',Year:2018,days:22},
      {sno:5,Projectname:'abc5',Year:2018,days:23},
      {sno:6,Projectname:'abc5',Year:2018,days:24},
      {sno:7,Projectname:'abc5',Year:2018,days:25},
      {sno:8,Projectname:'abc5',Year:2018,days:28},
      {sno:9,Projectname:'abc5',Year:2018,days:27},
      {sno:10,Projectname:'abc5',Year:2018,days:41},
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
    this.edit=0;
    this.yr=0;
    // this.holidayform.reset(); 
  }
  saveholidayinfo()
  {
 
    this.holidaylistform.reset();
   
    alert("Data Added Successfully")
  }
  saveholidayeditinfo()
  {
 
    this.holidayeditlistform.reset();
     alert("Data Added Successfully")
  }
 
 }

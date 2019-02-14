import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { EventEmitterService } from '../event-emitter.service';
import { AppLink } from '../app-link';
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  searchresourceform:FormGroup;
  updateresourcedetails:FormGroup;
  role:any;
  error:any;
  ip=AppLink.baseURL;
  dtOptions = AppLink.DTOptions; 
  list:any;
  editerror:any;
  edit=0;
  band:any;

  addresourceform:FormGroup;
  constructor(private formBuilder: FormBuilder,private eventEmitterService: EventEmitterService) { }

  ngOnInit() {
    this.eventEmitterService.menuinvokefunction();
    if(localStorage.getItem('logeduser')=='admin'){
      this.role=true;
    }
   
      this.band=[
        {bandname:'U1'},  {bandname:'U2'},  {bandname:'U3'},  {bandname:'U4'},  {bandname:'P1'},  {bandname:'P2'}
      ];
    this.searchresourceform = new FormGroup({
      search_associatename:new FormControl('',{
        validators: []
      }),
      search_associateid:new FormControl('',{
        validators: []
      }),
      search_band:new FormControl('',{
        validators: []
      })
    });
    this.addresourceform = new FormGroup({
      addassociatename:new FormControl('',{
        validators: [Validators.required]
      }),
      addassociateid:new FormControl('',{
        validators: [Validators.required]
      }),
      addband:new FormControl('',{
        validators: [Validators.required]
      }),
      addemailid:new FormControl('',{
        validators: [Validators.required]
      }),
      addcontactnumber:new FormControl('',{
        validators: [Validators.required]
      }),
      addpid:new FormControl('',{
        validators: [Validators.required]
      })
    });
    this.updateresourcedetails = new FormGroup({
      editassociatename:new FormControl('',{
        validators: [Validators.required]
      }),
      editassociateid:new FormControl('',{
        validators: [Validators.required]
      }),
      editband:new FormControl('',{
        validators: [Validators.required]
      }),
      editemailid:new FormControl('',{
        validators: [Validators.required]
      }),
      editcno:new FormControl('',{
        validators: [Validators.required]
      }),
      editpid:new FormControl('',{
        validators: [Validators.required]
      })
    });
 }
 search_resource_details(a){
   console.log(a);    
  this.list = [
    {sno:1,associatename:'Prashanthi',id:'NP00585716',band:'U3',pid:'02121212'},
    {sno:2,associatename:'suman',id:'SK00550019',band:'U4',pid:'02121212'},
    {sno:3,associatename:'srinitha',id:'SR00551505',band:'U2',pid:'02121212'},
  
  ];
  
}
// errordata() {
//   this.error = 'no data found';
// }
// errorexceptiondata() {
//   this.error = 'Exception has occurred while fetching resource details';
// }
// badrequest() {
//   this.error="Bad Request";
// }
add_resource_data(data)
{
 console.log(data);
 alert("Data Added Successfully.");
 this.addresourceform.reset();
}
update_resource_data(data)
{
  console.log(data);
  if(data.editpid==""){
   let flag= confirm("Associate is Not Mapped to any PID,\nDo you want to update ?");
    if(flag== true){
      alert("Data Updated Successfully.");
    }
    else{
      alert("Data Updation Failed.");
    }
  }
  else{
    alert("Data Updated Successfully.");
  }



 // this.updateresourcedetails.reset();
}
deletedata(){
  if (confirm("Do you want to delete Resource For the Year?")) {
    alert("Resource Details Deleted Successfully.")
  } 
}


}

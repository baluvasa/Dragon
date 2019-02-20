import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';
import { AppServicesService} from '../app-services.service';
// import { HttpBackend } from '@angular/common/http';
import { AppLink } from '../app-link';
// import { url } from 'inspector';
import { HttpClient } from  "@angular/common/http";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginform: FormGroup;
    // ip=AppLink.baseURL;
    error:any;
    errorinfo:any; 
    logres:any;  
    msg:any; 
    afterlogin:any;
    alogin:any;
    constructor(private formBuilder: FormBuilder,private router:Router,private appservice:AppServicesService,private  httpClient:HttpClient) { }
    
    ngOnInit() {     
        this.loginform = new FormGroup({
            associateId:new FormControl('',{
              validators: [Validators.required,<any>Validators.minLength(4), <any>Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9 ]*[a-zA-Z0-9_]$')],
              updateOn:'blur'
            }),
            password:new FormControl('',{
              validators: [Validators.required,<any>Validators.minLength(6)],
              updateOn:'blur'
            })
          })
        }    
    nodata(){
        this.error="No Data Found";
    }
    exception(){
        this.error="Exception has occurred while Fetching the Data";
    }
    badrequest(){
        this.error="Bad Request";
    }
    
    onsignin(data){
      let user_login={associateId:data.associateId,password:data.password}
      let url='http://10.56.67.9:8082/po/login/associate';
      this.httpClient.post(url,user_login).subscribe(result => {
      this.afterlogin=result;
      console.log(this.afterlogin);
      if(this.afterlogin.status==200){
      this.appservice.setLogedinfo(this.afterlogin.accessDetails.accessType); 
      this.router.navigate(['home']);
      }
      else{
      this.error = 'Incorrect Username/password'; 
      }
      },
      error => {
      this.error = 'Check your Network Connection '; 
      });
      } 

    }
  
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
    user_login:any;
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
    
    onsignin(user_login){
        
       
     this.user_login={associateId:'BV00586358',
    password:'PO@123456'}
        let url='http://10.56.67.9:8082/po/login/associate';
        this.httpClient.post(url,this.user_login).subscribe(result => {
        console.log("------------",result);
        this.afterlogin=result;
        console.log("11111111111111",this.afterlogin.accessDetails.accessType);
        if(this.afterlogin.accessDetails.accessType=='admin'){
          this.appservice.setLogedinfo('admin'); 
          this.router.navigate(['home']);
        }
        else{
         
          this.router.navigate(['profile']);
          
        }
        },
        error => {
          this.error = 'Incorrect Username/password'; 
        });
      } 

    }
  
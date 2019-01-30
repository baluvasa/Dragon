import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';
import { AppServicesService} from '../app-services.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginform: FormGroup;
    error:any;
    errorinfo:any;    
    constructor(private formBuilder: FormBuilder,private router:Router,private appservice:AppServicesService) { }
    
    ngOnInit() {     
        this.loginform = new FormGroup({
            username:new FormControl('',{
              validators: [Validators.required,<any>Validators.minLength(4)],
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
    
    onSubmit(value:any) {
console.log(value);
        if(value.username=='admin' && value.password=='admin123'){
            this.appservice.setLogedinfo('admin');            
            this.router.navigate(['home']);

        } else if(value.username=='user' && value.password=='user123'){
            this.appservice.setLogedinfo('user');
            this.router.navigate(['home']);
        } else{           
            this.error='Incorrect Username/password'; 
            this.loginform.reset();                         
        }
    }
    
}



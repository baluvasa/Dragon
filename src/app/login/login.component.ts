import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  //username: string;
  //password: string;
  error:any;

  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
      this.loginform = this.formBuilder.group({
          username: ['', Validators.required],         
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginform.controls; }


  onSubmit(value:any) { 
            if(value.username=='admin' && value.password=='admin123'){
                this.router.navigate(['home']);
            } else{           
                this.error='Incorrect Username/password'; 
                this.loginform.reset();                         
        }
  }

  }



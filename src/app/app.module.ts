import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { ProjectinfoComponent } from './projectinfo/projectinfo.component';
import { FormGroup, FormArray, FormBuilder,Validators,ReactiveFormsModule,FormsModule  } from '@angular/forms';
import {NgbModule,NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { LeavedetailsComponent } from './leavedetails/leavedetails.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LeftmenuComponent,
    ProfileComponent,
    HomeComponent,
    ChartsComponent,
    LogoutComponent,
    LoginComponent,
    ChangepasswordComponent,
    CreateprojectComponent,
    ProjectinfoComponent,
    LeavedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

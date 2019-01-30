import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
// import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { ProjectinfoComponent } from './projectinfo/projectinfo.component';
import { FormGroup, FormArray, FormBuilder,Validators,ReactiveFormsModule,FormsModule  } from '@angular/forms';
import {NgbModule,NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { LeavedetailsComponent } from './leavedetails/leavedetails.component'; 
import { AppServicesService } from './app-services.service';
import { HolidaysComponent } from './holidays/holidays.component';
import { FxratesComponent } from './fxrates/fxrates.component';
import { ResourcesComponent } from './resources/resources.component';
import { PoapprovalComponent } from './poapproval/poapproval.component'; 
import { AccountcategoryComponent } from './accountcategory/accountcategory.component';
import { QuoteComponent } from './quote/quote.component';
import { AccessdetailsComponent } from './accessdetails/accessdetails.component'; 
@NgModule({
  declarations: [
    AppComponent,
    LeftmenuComponent,
    ProfileComponent,
    HomeComponent,
    ChartsComponent,
    LogoutComponent,
    LoginComponent,
    // ChangepasswordComponent,
    CreateprojectComponent,
    ProjectinfoComponent,
    LeavedetailsComponent,
    HolidaysComponent,
    FxratesComponent,
    ResourcesComponent,
    PoapprovalComponent,
    AccountcategoryComponent,
    QuoteComponent,
    AccessdetailsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    DataTablesModule
  ],
  providers: [AppServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import {NgbModule,NgbPaginationModule, NgbAlertModule, NgbDatepicker, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { LeavedetailsComponent } from './leavedetails/leavedetails.component'; 
import { AppServicesService } from './app-services.service';
import { HolidaysComponent } from './holidays/holidays.component';
import { FxratesComponent } from './fxrates/fxrates.component';
import { ResourcesComponent } from './resources/resources.component';
import { PoapprovalComponent } from './poapproval/poapproval.component'; 
import { AccountcategoryComponent } from './accountcategory/accountcategory.component';
import { QuoteComponent } from './quote/quote.component';
import { AccessdetailsComponent } from './accessdetails/accessdetails.component';
import { Createproject1Component } from './createproject1/createproject1.component';
import { Accountcategory1Component } from './accountcategory1/accountcategory1.component'; 
import { HttpClientModule } from  "@angular/common/http";
import { CanActivateGuard } from './can-activate.guard';
import {MyDatePickerModule} from 'mydatepicker';
import { ProjectinfoMonthlyComponent } from './projectinfo-monthly/projectinfo-monthly.component';
import { PronovComponent } from './pronov/pronov.component';
import { ProdecComponent } from './prodec/prodec.component';
import { PoappComponent } from './poapp/poapp.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';

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
    AccessdetailsComponent,
    Createproject1Component,
    Accountcategory1Component,
    ProjectinfoMonthlyComponent,
    PronovComponent,
    ProdecComponent,
    PoappComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    DataTablesModule,
    HttpClientModule,
    MyDatePickerModule,
    BsDatepickerModule.forRoot(),
    NgSelectModule,
    FormsModule
  ],
  providers: [AppServicesService,CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

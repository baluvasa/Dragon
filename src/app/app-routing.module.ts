import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
// import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { ProjectinfoComponent } from './projectinfo/projectinfo.component';
import { LeavedetailsComponent } from './leavedetails/leavedetails.component';
import { HolidaysComponent } from './holidays/holidays.component'; 
import { FxratesComponent } from './fxrates/fxrates.component'; 
import { ResourcesComponent } from './resources/resources.component'; 
import { AccountcategoryComponent } from './accountcategory/accountcategory.component';
import { PoapprovalComponent } from './poapproval/poapproval.component';
import { QuoteComponent } from './quote/quote.component'; 
import { AccessdetailsComponent } from './accessdetails/accessdetails.component'; 
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  
  { path: 'profile', component: ProfileComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  // { path: 'changepassowrd', component: ChangepasswordComponent },
  { path: 'createproject', component: CreateprojectComponent },    
  { path: 'projectinfo', component: ProjectinfoComponent }, 
  { path: 'leavedetails', component: LeavedetailsComponent },
  {path:'holidays', component:HolidaysComponent} ,
  { path: 'fxrates', component: FxratesComponent } ,   
  { path: 'resources', component: ResourcesComponent },
  { path: 'accountcategory', component: AccountcategoryComponent },
  { path: 'poapproval', component: PoapprovalComponent },
  { path: 'quote', component:  QuoteComponent},
  { path: 'accessdetails', component:  AccessdetailsComponent}
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

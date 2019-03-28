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
 import {  Createproject1Component} from './createproject1/createproject1.component'; 
// import { Accountcategory1Component } from './accountcategory1/accountcategory1.component';
import { PoappComponent } from './poapp/poapp.component';
import { CanActivateGuard } from './can-activate.guard'; 
import { PronovComponent } from './pronov/pronov.component';
import { ProdecComponent } from './prodec/prodec.component';
import { ProjectinfoMonthlyComponent } from './projectinfo-monthly/projectinfo-monthly.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent ,canActivate:[CanActivateGuard] },
  
  { path: 'profile', component: ProfileComponent,canActivate:[CanActivateGuard] },
  { path: 'charts', component: ChartsComponent,canActivate:[CanActivateGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  // { path: 'changepassowrd', component: ChangepasswordComponent },
  { path: 'createproject', component: CreateprojectComponent,canActivate:[CanActivateGuard]  },    
   { path: 'createproject1', component: Createproject1Component },    
  { path: 'projectinfo', component: ProjectinfoComponent }, 
  { path: 'leavedetails', component: LeavedetailsComponent,canActivate:[CanActivateGuard] },
  {path:'holidays', component:HolidaysComponent,canActivate:[CanActivateGuard]} ,
  { path: 'fxrates', component: FxratesComponent,canActivate:[CanActivateGuard] } ,   
  { path: 'resources', component: ResourcesComponent,canActivate:[CanActivateGuard] },
  { path: 'accountcategory', component: AccountcategoryComponent,canActivate:[CanActivateGuard] },
  // { path: 'poapproval', component: PoapprovalComponent,canActivate:[CanActivateGuard] },
  { path: 'quote', component:  QuoteComponent,canActivate:[CanActivateGuard]},
  { path: 'accessdetails', component:  AccessdetailsComponent,canActivate:[CanActivateGuard]},
  { path: 'projectinfo-monthly', component:  ProjectinfoMonthlyComponent,canActivate:[CanActivateGuard]},
  { path: 'pronov', component:  PronovComponent,canActivate:[CanActivateGuard]},
  { path: 'prodec', component:  ProdecComponent,canActivate:[CanActivateGuard]},
   { path: 'poapproval', component:  PoappComponent,canActivate:[CanActivateGuard]},
  // { path: 'accountcategory1', component:  Accountcategory1Component}
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

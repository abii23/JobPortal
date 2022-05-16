import { Component, NgModule } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { CategoryDetailsComponent } from './Admin/category-details/category-details.component';
import { CategoryEditComponent } from './Admin/category-edit/category-edit.component';
import { CategoryReportComponent } from './Admin/category-report/category-report.component';
import { CategoryRegistrationComponent } from './Admin/CategoryRegistration/category-registration/category-registration.component';
import { CompanyDetailsComponent } from './Admin/company-details/company-details.component';
import { CompanyEditComponent } from './Admin/company-edit/company-edit.component';
import { CompanyReportComponent } from './Admin/company-report/company-report.component';
import { CompanyRegistrationComponent } from './Admin/CompanyRegistraionForm/company-registration/company-registration.component';
import { EditSubcategoryComponent } from './Admin/edit-subcategory/edit-subcategory.component';
import { LocationEditComponent } from './Admin/location-edit/location-edit.component';
import { LocationRegistrationComponent } from './Admin/location-registration/location-registration.component';
import { LocationReportComponent } from './Admin/location-report/location-report.component';
import { LocationViewComponent } from './Admin/location-view/location-view.component';
import { LocationWiseCompanyComponent } from './Admin/location-wise-company/location-wise-company.component';
import { LocationWiseUserComponent } from './Admin/location-wise-user/location-wise-user.component';
import { PostWiseReportComponent } from './Admin/post-wise-report/post-wise-report.component';
import { SubCategoryComponent } from './Admin/sub-category/sub-category.component';
import { SubcategoryDetailsComponent } from './Admin/subcategory-details/subcategory-details.component';
import { SubcategoryReportComponent } from './Admin/subcategory-report/subcategory-report.component';
import { GuestHomeComponent } from './Guest/guest-home/guest-home.component';
import { LoginFormComponent } from './Guest/login-form/login-form.component';
import { ProviderLoginComponent } from './provider-login/provider-login.component';
import { PostEditComponent } from './Provider/post-edit/post-edit.component';
import { PostRegFormComponent } from './Provider/post-reg-form/post-reg-form.component';
import { PostViewComponent } from './Provider/post-view/post-view.component';
import { ApplicantViewComponent } from './Provider/provider/applicant-view/applicant-view.component';
import { ProviderComponent } from './Provider/provider/provider.component';
import { ApplicationFormComponent } from './user/application-form/application-form.component';
import { MoreDetailsComponent } from './user/more-details/more-details.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { ViewMoreComponent } from './user/view-more/view-more.component';
import { YourApplicationComponent } from './user/your-application/your-application.component';

const routes: Routes = [
  
  {path:'',redirectTo:'GuestHome',pathMatch:'full'},
  {path:'user',component:UserHomeComponent,children:[
]},
{path:'ViewMore/:id',component:ViewMoreComponent},
{path:'applyDetails/:id',component:ApplicationFormComponent},
{path:'ApplicationView',component:YourApplicationComponent},
{path:'moredetails/:id',component:MoreDetailsComponent},



{path:'AdminHomePage',component:AdminHomeComponent,children:[
  {path:'CompanyRegistration',component:CompanyRegistrationComponent},
  {path:'CategoryDetails',component:CategoryDetailsComponent},
{path:'Categoryregistration',component:CategoryRegistrationComponent},
{path:'CategoryEdit/:id',component:CategoryEditComponent},
{path:'SubCategory',component:SubCategoryComponent},
{path:'SubCategoryDetails',component:SubcategoryDetailsComponent},
{path:'SubCategoryEdit/:id',component:EditSubcategoryComponent},
{path:'CompanyDetails',component:CompanyDetailsComponent},
{path:'CompanyEdit/:id',component:CompanyEditComponent},
{path:'locationRegistration',component:LocationRegistrationComponent},
{path:'LocationDetails',component:LocationViewComponent},
{path:'LocationEdit/:id',component:LocationEditComponent},
{path:'PostWise',component:PostWiseReportComponent},
{path:'CategoryReport',component:CategoryReportComponent},
{path:'SubCategoryReport',component:SubcategoryReportComponent},
{path:'CompanyReport',component:CompanyReportComponent},
{path:'LocationReport',component:LocationReportComponent},
{path:'CompanyLocationReport',component:LocationWiseCompanyComponent},
{path:'LocationWiseUser',component:LocationWiseUserComponent}


]},

{path:'GuestHome',component:GuestHomeComponent},
{path:'Provider',component:ProviderComponent,children:[
  {path:'postReg',component:PostRegFormComponent},
  {path:'postView',component:PostViewComponent},
  {path:'ApplicantView',component:ApplicantViewComponent},
  {path:'postEdit/:id',component:PostEditComponent}

]},
{path:'UserLogin',component:LoginFormComponent},

{path:'AdminLogin',component:AdminLoginComponent},
{path:'UserRegistration',component:UserRegistrationComponent},
{path:'providerLogin',component:ProviderLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

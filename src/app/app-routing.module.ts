import { Component, NgModule } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { CategoryDetailsComponent } from './Admin/category-details/category-details.component';
import { CategoryEditComponent } from './Admin/category-edit/category-edit.component';
import { CategoryRegistrationComponent } from './Admin/CategoryRegistration/category-registration/category-registration.component';
import { CompanyDetailsComponent } from './Admin/company-details/company-details.component';
import { CompanyEditComponent } from './Admin/company-edit/company-edit.component';
import { CompanyRegistrationComponent } from './Admin/CompanyRegistraionForm/company-registration/company-registration.component';
import { EditSubcategoryComponent } from './Admin/edit-subcategory/edit-subcategory.component';
import { LocationEditComponent } from './Admin/location-edit/location-edit.component';
import { LocationRegistrationComponent } from './Admin/location-registration/location-registration.component';
import { LocationViewComponent } from './Admin/location-view/location-view.component';
import { SubCategoryComponent } from './Admin/sub-category/sub-category.component';
import { SubcategoryDetailsComponent } from './Admin/subcategory-details/subcategory-details.component';
import { GuestHomeComponent } from './Guest/guest-home/guest-home.component';
import { LoginFormComponent } from './Guest/login-form/login-form.component';
import { ProviderLoginComponent } from './provider-login/provider-login.component';
import { PostRegFormComponent } from './Provider/post-reg-form/post-reg-form.component';
import { PostViewComponent } from './Provider/post-view/post-view.component';
import { ProviderComponent } from './Provider/provider/provider.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';

const routes: Routes = [{path:'user',component:UserHomeComponent},
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
{path:'LocationEdit/:id',component:LocationEditComponent}

]},

{path:'GuestHome',component:GuestHomeComponent},
{path:'Provider',component:ProviderComponent,children:[
  {path:'postReg',component:PostRegFormComponent},
  {path:'postView',component:PostViewComponent}
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

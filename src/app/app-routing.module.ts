import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { CategoryDetailsComponent } from './Admin/category-details/category-details.component';
import { CategoryEditComponent } from './Admin/category-edit/category-edit.component';
import { CategoryRegistrationComponent } from './Admin/CategoryRegistration/category-registration/category-registration.component';
import { CompanyRegistrationComponent } from './Admin/CompanyRegistraionForm/company-registration/company-registration.component';
import { SubCategoryComponent } from './Admin/sub-category/sub-category.component';
import { SubcategoryDetailsComponent } from './Admin/subcategory-details/subcategory-details.component';
import { GuestHomeComponent } from './Guest/guest-home/guest-home.component';
import { LoginFormComponent } from './Guest/login-form/login-form.component';
import { ProviderComponent } from './Provider/provider/provider.component';
import { UserHomeComponent } from './user/user-home/user-home.component';

const routes: Routes = [{path:'user',component:UserHomeComponent},
{path:'AdminHomePage',component:AdminHomeComponent,children:[
  {path:'CompanyRegistration',component:CompanyRegistrationComponent},
  {path:'CategoryDetails',component:CategoryDetailsComponent},
{path:'Categoryregistration',component:CategoryRegistrationComponent},
{path:'CategoryEdit/:id',component:CategoryEditComponent},
{path:'SubCategory',component:SubCategoryComponent},
{path:'SubCategoryDetails',component:SubcategoryDetailsComponent}
]},

{path:'GuestHome',component:GuestHomeComponent},
{path:'Provider',component:ProviderComponent},
{path:'UserLogin',component:LoginFormComponent},

{path:'AdminLogin',component:AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

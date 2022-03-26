import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { GuestHomeComponent } from './Guest/guest-home/guest-home.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { ProviderComponent } from './Provider/provider/provider.component';
import { LoginFormComponent } from './Guest/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyRegistrationComponent } from './Admin/CompanyRegistraionForm/company-registration/company-registration.component';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { CategoryRegistrationComponent } from './Admin/CategoryRegistration/category-registration/category-registration.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryDetailsComponent } from './Admin/category-details/category-details.component';
import { CategoryEditComponent } from './Admin/category-edit/category-edit.component';
import { SubCategoryComponent } from './Admin/sub-category/sub-category.component';
import { SubcategoryDetailsComponent } from './Admin/subcategory-details/subcategory-details.component';
import { EditSubcategoryComponent } from './Admin/edit-subcategory/edit-subcategory.component';
import { CompanyDetailsComponent } from './Admin/company-details/company-details.component';
import { CompanyEditComponent } from './Admin/company-edit/company-edit.component';
import { LocationRegistrationComponent } from './Admin/location-registration/location-registration.component';
import { LocationViewComponent } from './Admin/location-view/location-view.component';
import { LocationEditComponent } from './Admin/location-edit/location-edit.component';
import { PostRegFormComponent } from './Provider/post-reg-form/post-reg-form.component';
import { PostViewComponent } from './Provider/post-view/post-view.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { ProviderLoginComponent } from './provider-login/provider-login.component';
@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    AdminHomeComponent,
    GuestHomeComponent,
    ProviderComponent,
    LoginFormComponent,
    CompanyRegistrationComponent,
    AdminLoginComponent,
    CategoryRegistrationComponent,
    CategoryDetailsComponent,
    CategoryEditComponent,
    SubCategoryComponent,
    SubcategoryDetailsComponent,
    EditSubcategoryComponent,
    CompanyDetailsComponent,
    CompanyEditComponent,
    LocationRegistrationComponent,
    LocationViewComponent,
    LocationEditComponent,
    PostRegFormComponent,
    PostViewComponent,
    UserRegistrationComponent,
    ProviderLoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

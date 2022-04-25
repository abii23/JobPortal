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
import { ApplicationFormComponent } from './user/application-form/application-form.component';
import { ApplicantViewComponent } from './Provider/provider/applicant-view/applicant-view.component';
import { YourApplicationComponent } from './user/your-application/your-application.component';
import { ViewMoreComponent } from './user/view-more/view-more.component';
import { PostEditComponent } from './Provider/post-edit/post-edit.component';
import { PostWiseReportComponent } from './Admin/post-wise-report/post-wise-report.component';
import { MoreDetailsComponent } from './user/more-details/more-details.component';
import { DatePipe } from '@angular/common';
import { CategoryReportComponent } from './Admin/category-report/category-report.component';
import { SubcategoryReportComponent } from './Admin/subcategory-report/subcategory-report.component';
import { CompanyReportComponent } from './Admin/company-report/company-report.component';
import { LocationReportComponent } from './Admin/location-report/location-report.component';
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
    ApplicationFormComponent,
    ApplicantViewComponent,
    YourApplicationComponent,
    ViewMoreComponent,
    PostEditComponent,
    PostWiseReportComponent,
    MoreDetailsComponent,
    CategoryReportComponent,
    SubcategoryReportComponent,
    CompanyReportComponent,
    LocationReportComponent,
   
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
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

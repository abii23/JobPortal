import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';

@Component({
  selector: 'app-category-registration',
  templateUrl: './category-registration.component.html',
  styleUrls: ['./category-registration.component.scss']
})
export class CategoryRegistrationComponent implements OnInit {
  CategoryRegistration!:FormGroup
  savestatus=false;

  constructor(private AdminRegistrationService:AdminRegistrationService ,private fb:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.CategoryRegistration=this.fb.group({
      CategoryName:['',Validators.required],
      CategoryDescription:[''],
    })
  }
  SaveCategory(){
    
    if(!this.CategoryRegistration.valid)
    {
      this.savestatus=true
      return;
    }
    else
    {
      this.AdminRegistrationService.SaveCategory(this.CategoryRegistration.value).then(()=>
      {
        this.route.navigate(['AdminHomePage/CategoryDetails'])
      })
    }
  }

}

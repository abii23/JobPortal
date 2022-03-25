import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.scss']
})
export class CompanyRegistrationComponent implements OnInit {
   
    CompanyForm!:FormGroup
    StateList:any[]=[];
    districtList:any[]=[''];
  constructor(private fb:FormBuilder,private adminRegistrationService:AdminRegistrationService,private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {

    this.adminRegistrationService.getStateList().subscribe((data: any) => {         //to fetch data of state form firebase,getStateList() is on registration service page
      this.StateList = data;
      console.log(data)
    });

    this.adminRegistrationService.getDistrictList().subscribe((data: any) => {         //to fetch data of state form firebase
      this.districtList = data;
      console.log(data)
    });

    this.CompanyForm=this.fb.group({
      CompanyName:[''],
      CompanyEmail:[''],
      CompanyStartYear:[''],
      CompanyContactNumber:[''],
      CompanyState:[''],
      CompanyDistrict:[''],
      CompanyAddress:[''],
      Description:['']


    })
  }

  SaveCompany(){
    this.adminRegistrationService.SaveCompany(this.CompanyForm.value).then(()=>
    {
      this.route.navigate(['AdminHomePage/CategoryDetails'])
    })
  }

}

   



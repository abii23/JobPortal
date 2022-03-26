import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.scss']
})
export class CompanyRegistrationComponent implements OnInit {
   
    CompanyForm!:FormGroup
    LocationList:any[]=[];
    districtList:any[]=[''];
    LocationControl = new FormControl('');
  constructor(private fb:FormBuilder,private adminRegistrationService:AdminRegistrationService,private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {

    

    this.adminRegistrationService.getDistrictList().subscribe((data: any) => {         //to fetch data of state form firebase
      this.districtList = data;
      console.log(data)
    });

    this.CompanyForm=this.fb.group({
      CompanyName:[''],
      CompanyEmail:[''],
      CompanyStartYear:[''],
      CompanyContactNumber:[''],
      CompanyLocation:[''],
      CompanyDistrict:[''],
      CompanyAddress:[''],
      Description:[''],
      Password:['']


    })
  }

  SaveCompany(){
    console.log(this.CompanyForm.value)
    this.adminRegistrationService.SaveCompany(this.CompanyForm.value).then(()=>
    {
      this.route.navigate(['AdminHomePage/CategoryDetails'])
    })
  }
  getLocation(){
    this.adminRegistrationService.getLocationById(this.CompanyForm.value.CompanyDistrict).subscribe((data:any[])=>(this.LocationList=data));
  }

  onChange(event: any) {
    console.log(this.CompanyForm.value.CompanyDistrict);
    this.adminRegistrationService.getLocationByDistrict(this.CompanyForm.value.CompanyDistrict)
    .subscribe(res => {
    console.log(res);
    this.LocationList = res;
    })

}

}



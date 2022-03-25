import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSerService } from 'src/app/Services/user-ser.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  LocationList:any[]=[];
    districtList:any[]=[''];

  constructor(private fb:FormBuilder,private UserRegistrationService:UserSerService,private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.UserRegistrationService.getLocationList().subscribe((data: any) => {         //to fetch data of state form firebase,getStateList() is on registration service page
      this.LocationList = data;
      console.log(data)
    });

    this.UserRegistrationService.getDistrictList().subscribe((data: any) => {         //to fetch data of state form firebase
      this.districtList = data;
      console.log(data)
    });
  }

}

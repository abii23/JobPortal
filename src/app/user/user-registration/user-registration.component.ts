import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    userRegForm!:FormGroup

  constructor(private UserRegistrationService: UserSerService,private router: Router,private fb: FormBuilder,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.UserRegistrationService.getLocationList().subscribe((data: any) => {         //to fetch data of state form firebase,getStateList() is on registration service page
      this.LocationList = data;
      console.log(data)
    });

    this.UserRegistrationService.getDistrictList().subscribe((data: any) => {         //to fetch data of state form firebase
      this.districtList = data;
      console.log(data)
    });

    this.userRegForm=this.fb.group({
      Email:[''],
      password:[''],
    postName:[''],
    District:[''],
    Location:[''],
    ContactNum:[''],
    Qualification:[''],
    })
  }
  // onSubmit(){
  //   this.UserRegistrationService.login(this.userRegForm.value).then(res=> {
  //     this.router.navigate(['/userHome'])
  //     })
  //     .catch(er=> {
  //     alert('invalid ')
  //     })
      
  }



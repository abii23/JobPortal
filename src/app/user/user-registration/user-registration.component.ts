import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
    LocationControl = new FormControl('');
    user_id:any

    

  constructor(private UserRegistrationService: UserSerService,private router: Router,private fb: FormBuilder,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.UserRegistrationService.getLocationList().subscribe((data: any) => {         //to fetch data of state form firebase,getStateList() is on registration service page
    //  this.LocationList = data;
    // console.log(data)
    // });

    this.UserRegistrationService.getDistrictList().subscribe((data: any) => {         //to fetch data of state form firebase
      this.districtList = data;
      console.log(data)
    });

    this.userRegForm=this.fb.group({
   
      UserName:[''],
    UserDistrict:[''],
    UserLocation:[''],
    ContactNum:[''],
    Address:[''],
    Qualification:[''],
  })

   
    

    
  }
  getLocation(){
    this.UserRegistrationService.getLocationById(this.userRegForm.value.CompanyDistrict).subscribe((data:any[])=>(this.LocationList=data));
  }
  onChange(event: any) {
    console.log(this.userRegForm.value.UserDistrict);
    this.UserRegistrationService.getLocationByDistrict(this.userRegForm.value.UserDistrict)
    .subscribe(res => {
      console.log(res);
      this.LocationList = res;
    })
    
  }
 
  // onSubmit(){
  //   this.UserRegistrationService.login(this.userRegForm.value).then(res=> {
  //     this.router.navigate(['/userHome'])
  //     })
  //     .catch(er=> {
  //     alert('invalid ')
  //     })
      

  onSubmit(){
    this.user_id=localStorage.getItem("userid"),
    console.log(this.user_id)
    this.UserRegistrationService.updateUser(this.user_id,this.userRegForm.value).then(()=>{
      this.router.navigate(["/user"])
    });
  }
  }



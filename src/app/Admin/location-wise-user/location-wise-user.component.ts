import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';

@Component({
  selector: 'app-location-wise-user',
  templateUrl: './location-wise-user.component.html',
  styleUrls: ['./location-wise-user.component.scss']
})
export class LocationWiseUserComponent implements OnInit {

  LocationList:any[]=[''];
  districtList:any[]=[''];
  DistrictControl = new FormControl('');

  count:any
 
  constructor(private adminRegistration:AdminRegistrationService,private route:Router,private router:ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {
   //console.log(this.DistrictControl);
    this.adminRegistration.getDistrictList().subscribe((data: any) => {         //to fetch data of state form firebase
      this.districtList = data;
      console.log(data)
    });
    //this.getLocation();
    this.getuser()
  }
  getLocation(){
    this.adminRegistration.getLocation().then((data:any[])=>(this.LocationList=data));
  }

  getuser(){
    this.adminRegistration.getuserList().then((data:any[])=>{
      this.LocationList=data;
      console.log(this.LocationList)
      this.count=this.LocationList.length;
    });
    
  }

  onChange(event: any) {
    console.log(this.DistrictControl.value);
    this.adminRegistration.getUserByLocation(this.DistrictControl.value)
    .subscribe(res => {
    console.log(res);
    this.LocationList = res;
    this.count=this.LocationList.length;
    })
  }
}

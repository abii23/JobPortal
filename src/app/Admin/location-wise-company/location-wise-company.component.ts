import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';

@Component({
  selector: 'app-location-wise-company',
  templateUrl: './location-wise-company.component.html',
  styleUrls: ['./location-wise-company.component.scss']
})
export class LocationWiseCompanyComponent implements OnInit {

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
  }
  getLocation(){
    this.adminRegistration.getLocation().then((data:any[])=>(this.LocationList=data));
  }

  onChange(event: any) {
    console.log(this.DistrictControl.value);
    this.adminRegistration.getCompanyByLocation(this.DistrictControl.value)
    .subscribe(res => {
    console.log(res);
    this.LocationList = res;
    this.count=this.LocationList.length;
    })
    
    }
    







  delete(Location_id:any){
    console.log(Location_id)
    if(confirm("Are you sure you want to delete this Location?")){
      this.adminRegistration.deleteLocation(Location_id).then(()=>
      {
      
      },
      (error:any)=>console.error(error)
      );
    }
  }

}

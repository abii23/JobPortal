import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.scss']
})
export class LocationEditComponent implements OnInit {
  LocationEditForm!:FormGroup;
  public LocationList:any[]=[''];
  public districtList:any[]=[''];
  Location_id:any;

  constructor(private fb:FormBuilder,private route:Router,private router:ActivatedRoute,private adminRegistration:AdminRegistrationService)
   {
    router.params.subscribe(catid =>{this.Location_id=catid['id'];})
    }

  ngOnInit(): void {
    this.adminRegistration.getDistrictList().subscribe((data: any) => {         //to fetch data of state form firebase
      this.districtList = data;
      console.log(data)
    });
    this.LocationEditForm=this.fb.group({
      

      District:[''],
      LocationName:['']
    });
    this.adminRegistration.getLocationList().subscribe((data:any)=>{
      this.LocationList =data;
      console.log(this.LocationList)
    });
    if(this.Location_id)
    {
      this.adminRegistration.getLocationById(this.Location_id).subscribe((result: any)=>{
        if(result){
          this.LocationEditForm.patchValue(result);
        }
      });
    }
    else
    {
      alert("failed");
    }
  }
  Submit(){
    this.adminRegistration.updateLocation(this.Location_id,this.LocationEditForm.value).then(()=>{
      this.route.navigate(["AdminHomePage/LocationDetails"])
    });
  }
}

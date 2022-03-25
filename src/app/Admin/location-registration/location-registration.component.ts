import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';

@Component({
  selector: 'app-location-registration',
  templateUrl: './location-registration.component.html',
  styleUrls: ['./location-registration.component.scss']
})
export class LocationRegistrationComponent implements OnInit {
  Locationregistration!:FormGroup
  districtList:any[]=[''];

  constructor(private fb:FormBuilder,private route:ActivatedRoute,private adminregistration:AdminRegistrationService,private router:Router) { }

  ngOnInit(): void {

    this.adminregistration.getDistrictList().subscribe((data: any) => {         //to fetch data of state form firebase
      this.districtList = data;
      console.log(data)
    });
    this.Locationregistration=this.fb.group({
      

      District:[''],
      LocationName:['']
    })
  }
  

  Savedata()
  {
    this.adminregistration.SaveLocationdata(this.Locationregistration.value).then(()=>
    {
      this.router.navigate(['AdminHomePage/LocationDetails'])
    })

  }

}

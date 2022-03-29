import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  CompanyEditForm!:FormGroup
  public CompanyList:any[]=[];
  public StateList:any[]=[];
  public districtList:any[]=[];
  Company_id:any;
  public choosenFile: any;

  constructor(private fb:FormBuilder,private route:Router,private router:ActivatedRoute,private adminRegistration:AdminRegistrationService) 
  { 
    router.params.subscribe(catid =>{this.Company_id=catid['id'];})
  }

  ngOnInit(): void {

    this.adminRegistration.getStateList().subscribe((data: any) => {         //to fetch data of state form firebase,getStateList() is on registration service page
      this.StateList = data;
      console.log(data)
    });

    this.adminRegistration.getDistrictList().subscribe((data: any) => {         //to fetch data of state form firebase
      this.districtList = data;
      console.log(data)
    });


    this.CompanyEditForm=this.fb.group({
      
      CompanyName:[''],
      CompanyEmail:[''],
      CompanyStartYear:[''],
      CompanyContactNumber:[''],
      CompanyState:[''],
      CompanyDistrict:[''],
      CompanyAddress:[''],
      Description:[''],
      

    });
    this.adminRegistration.getCompanyList().subscribe((data:any)=>{
      this.CompanyList =data;
      console.log(this.CompanyList)
    });
    if(this.Company_id)
    {
      this.adminRegistration.getCompanyById(this.Company_id).subscribe((result: any)=>{
        if(result){
          this.CompanyEditForm.patchValue(result);
        }
      });
    }
    else
    {
      alert("failed");
    }
  }
  UpdateCompany(){
    this.adminRegistration.updateCompany(this.Company_id,this.CompanyEditForm.value).then(()=>{
      this.route.navigate(["AdminHomePage/CompanyDetails"])
    });
  }
  handleFileInput(event: any) {
    console.log(event.target.files[0])
    this.choosenFile = event.target.files[0]
    
  }

}

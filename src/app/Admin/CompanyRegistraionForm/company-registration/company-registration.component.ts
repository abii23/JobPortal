import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.scss']
})
export class CompanyRegistrationComponent implements OnInit {
  savestatus=false;
  public choosenFile: any;
  public loading = false;
   
    CompanyForm!:FormGroup
    LocationList:any[]=[];
    districtList:any[]=[''];
    companyList:any[]=[];
    LocationControl = new FormControl('');
  


  constructor(private fb:FormBuilder,private adminRegistrationService:AdminRegistrationService,private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {

    

    this.adminRegistrationService.getDistrictList().subscribe((data: any) => {         //to fetch data of state form firebase
      this.districtList = data;
      console.log(data)
    });
    

    this.CompanyForm=this.fb.group({
      CompanyName:['',Validators.required],
      CompanyEmail:['',Validators.required],
      CompanyStartYear:[''],
      CompanyContactNumber:['',Validators.required],
      CompanyDistrict:[''],
      CompanyLocation:[''],
      CompanyAddress:['',Validators.required],
      Description:[''],
      Password:['',Validators.required],
      fileUrl:['']


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
  handleFileInput(event: any) {
    console.log(event.target.files[0])
    this.choosenFile = event.target.files[0]
    
  }
  // SaveCompany(){
  //   console.log(this.CompanyForm.value)
  //   this.adminRegistrationService.SaveCompany(this.CompanyForm.value).then(()=>
  //   {
  //     this.route.navigate(['AdminHomePage/CategoryDetails'])
  //   })
  // }
 
 
  
  SaveCompany()
{
  if(!this.CompanyForm.valid)
  {
    this.savestatus=true
    return
  }
  else
  {
  console.log(this.CompanyForm.value.CompanyName);
  console.log(this.CompanyForm.value.CompanyEmail);
    this.adminRegistrationService.CheckCompany(this.CompanyForm.value.CompanyName,this.CompanyForm.value.CompanyEmail)
    .subscribe(res => {
    console.log(res)
    this.companyList = res;
    console.log(this.companyList.length);
  })
 if(this.companyList.length<=0)
 {
  this.adminRegistrationService.upload(this.choosenFile)
  .then(url => {
    if (url) {
      this.CompanyForm.patchValue({
        fileUrl: url
      })
  
  this.adminRegistrationService.SaveCompany(this.CompanyForm.value).then(()=>
  {
    this.route.navigate(["/AdminHomePage/CompanyDetails"]);
  });
  } else {
  alert("image upload error")
  }
  
  })
  
  .catch(err => {
  this.loading = false;
  console.log(err)
  })
 
 }
 else
{
 // console.log(this.companyList.length);
  alert("This company details already exists");
  
  
 
}


   
}






  }



  
}



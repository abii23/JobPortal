import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';

@Component({
  selector: 'app-category-report',
  templateUrl: './category-report.component.html',
  styleUrls: ['./category-report.component.scss']
})
export class CategoryReportComponent implements OnInit {

  public CompanyList:any[]=[];
  public DistrictList:any[]=[];
  category_id:any;

  constructor(private route:Router,private router:ActivatedRoute,private fb:FormBuilder,private adminRegistrationService:AdminRegistrationService) { }


  ngOnInit(): void {
    this.getCompany();
  }
  getCompany(){
    this.adminRegistrationService.getPostList().then((data:any[])=>{this.CompanyList=data;console.log(this.CompanyList)});
    
  }
  getDistrict(){
    this.adminRegistrationService.getLocationById(this.CompanyList.values).subscribe((data:any[])=>(this.DistrictList=data));
  }
  
  delete(Company_id:any){
    if(confirm("Are you sure you want to delete this  record?")){
      this.adminRegistrationService.deleteCompany(Company_id).then(()=>
      {
        this.getCompany();
      },
      (error:any)=>console.error(error)
      );
    }

  }

}

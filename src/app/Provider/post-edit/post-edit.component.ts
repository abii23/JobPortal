import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderSerService } from 'src/app/Services/provider-ser.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
 
 postList:any[]=['']
  postReg!:FormGroup

  CategoryList:any[]=[''];
  SubCategoryList:any[]=[''];
  LocationList:any[]=[''];
  Post_id: any;

  constructor(private fb:FormBuilder,private route:Router,private router:ActivatedRoute,private providerRegistration:ProviderSerService)
   {
    router.params.subscribe(catid =>{this.Post_id=catid['id'];})
    }

  ngOnInit(): void {
    this.providerRegistration.getCategoryList().subscribe((data: any) => {
      this.CategoryList = data;
      console.log(data)
    });
    this.providerRegistration.getSubCategoryList().subscribe((data: any) => {
      this.SubCategoryList = data;
      console.log(data)
    });
    this.providerRegistration.getLocationList().subscribe((data: any) => {
      this.LocationList = data;
      console.log(data)
    });
   
    this.postReg=this.fb.group({
      PostName:[''],
      // Category:[''],
      SubCategory:[''],
      Experience:[''],
      Vacancy:[''],
      Description:[''],
      JobType:[''],
      Location:[''],
      LastDate:[''],
      company_id:localStorage.getItem("CompanyId")
    
      

    })
    this.providerRegistration.getPostList().subscribe((data: any) => {
      this.postList = data;
      console.log(data)
    });
    if(this.Post_id)
    {
      this.providerRegistration.PostById(this.Post_id).subscribe((result: any)=>{
        if(result){
          this.postReg.patchValue(result);
        }
      });
    }
    else
    {
      alert("failed");
    }
  }
  UpdateCompany(){
    this.providerRegistration.updatePost(this.Post_id,this.postReg.value).then(()=>{
      this.route.navigate(["Provider/postView"])
    });
  }
  }



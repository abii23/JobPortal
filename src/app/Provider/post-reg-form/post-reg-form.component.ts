import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderSerService } from 'src/app/Services/provider-ser.service';

@Component({
  selector: 'app-post-reg-form',
  templateUrl: './post-reg-form.component.html',
  styleUrls: ['./post-reg-form.component.scss']
})
export class PostRegFormComponent implements OnInit {
  postReg!:FormGroup
  CategoryList:any[]=[''];
  SubCategoryList:any[]=[''];
  LocationList:any[]=[''];
  savestatus=false;
 current_date:Date;
  
  

  constructor(private datepipe:DatePipe, private fb:FormBuilder,private route:Router,private router:ActivatedRoute,private providerRegistration:ProviderSerService) { }

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
      PostName:['',Validators.required],
      // Category:[''],
      SubCategory:[''],
      Experience:[''],
      Vacancy:[''],
      Description:[''],
      JobType:[''],
      Location:[''],
      LastDate:[''],
      company_id:localStorage.getItem("CompanyId"),
    registered_date:this.datepipe.transform(new Date().toLocaleDateString(),"yyyy-MM-dd")
      

    })
  }
  SavePost(){

    if(!this.postReg.valid)
    {
      this.savestatus=true
      return;
    }
    else
    {
   
    this.providerRegistration.SavePost(this.postReg.value).then(()=>
    {
      this.route.navigate(['Provider/postView'])
    })
  }
}

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {
  subCategory!:FormGroup
  CategoryList:any[]=[];
  savestatus=false;

  constructor(private route:Router,private adminRegistrationService:AdminRegistrationService,private fb:FormBuilder,router:ActivatedRoute) { 
    
  }
  
  ngOnInit(): void {
    
    
    this.adminRegistrationService.getCategoryList().subscribe((data: any) => {
      this.CategoryList = data;
      console.log(data)
    });
   this.subCategory=this.fb.group({
      
      category:[''],
      SubCategoryName:[''],
       SubCategoryDescription:[''],
     })
  }
  SaveSubCategory(){
    if(!this.subCategory.valid)
    {
      this.savestatus=true
      return
    }
    else
    {
    this.adminRegistrationService.SaveSubCategory(this.subCategory.value).then(()=>
    {
      this.route.navigate(['AdminHomePage/SubCategoryDetails'])
    })
  }

  }
}

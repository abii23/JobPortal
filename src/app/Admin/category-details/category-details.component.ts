import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
  

  constructor(private adminRegistrationService:AdminRegistrationService,private fb:FormBuilder,private router:Router,private route:ActivatedRoute) { 
   
  }

  public categoryList:any[]=[];
  category_id:any;


  ngOnInit(): void {
    this.getCategories();
    
  }
  getCategories(){
    this.adminRegistrationService.getCategories().subscribe((data:any[])=>(this.categoryList=data));
  }
  delete(category_id:any){
    if(confirm("Are you sure you want to delete this  record?")){
      this.adminRegistrationService.deleteCategory(category_id).then(()=>
      {
        this.getCategories();
      },
      (error:any)=>console.error(error)
      );
    }

  }

}

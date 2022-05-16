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
  count: number;

  constructor(private adminRegistrationService:AdminRegistrationService,private fb:FormBuilder,private router:Router,private route:ActivatedRoute) { 
   
  }

  public categoryList:any[]=[];
  category_id:any;


  ngOnInit(): void {
    this.getCategories();
    
  }
  getCategories(){
    this.adminRegistrationService.getCategories().subscribe((data:any[])=>{this.categoryList=data
    this.count=this.categoryList.length
    
    });
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

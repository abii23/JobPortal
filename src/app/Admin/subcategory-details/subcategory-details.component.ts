import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';

@Component({
  selector: 'app-subcategory-details',
  templateUrl: './subcategory-details.component.html',
  styleUrls: ['./subcategory-details.component.scss']
})
export class SubcategoryDetailsComponent implements OnInit {
  public SubcategoryList:any[]=[];
  category_id:any;


  constructor(private adminRegistrationService:AdminRegistrationService,private route:Router,private router:ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getSubCategories();
  }
  getSubCategories(){
    this.adminRegistrationService.getSubCategories().then((data:any[])=>(this.SubcategoryList=data));
    console.log("hello");
    
    console.log(this.SubcategoryList);
    
  }
  delete(Subcategory_id:any){
    if(confirm("Are you sure you want to delete this employee record?")){
      this.adminRegistrationService.deleteSubCategory(Subcategory_id).then(()=>
      {
        this.getSubCategories();
      },
      (error:any)=>console.error(error)
      );
    }

  }

}

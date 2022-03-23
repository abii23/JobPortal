import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  categoryEditForm!:FormGroup;
  constructor(private adminRegistrationService:AdminRegistrationService,private fb:FormBuilder,private router:Router,private route:ActivatedRoute) 
  {
    route.params.subscribe(catid =>{this.category_id=catid['id'];})
   }
  public categoryList:any[]=[];
  category_id:any;
  ngOnInit(): void {
    this.categoryEditForm=this.fb.group({
      
      CategoryName:[''],
      CategoryDescription:['']

    });
    this.adminRegistrationService.getCategoryList().subscribe((data:any)=>{
      this.categoryList =data;
      console.log(this.categoryList)
    });
    if(this.category_id)
    {
      this.adminRegistrationService.getCategoryById(this.category_id).subscribe((result: any)=>{
        if(result){
          this.categoryEditForm.patchValue(result);
        }
      });
    }
    else
    {
      alert("failed");
    }
 }
  submit(){
    this.adminRegistrationService.updateProduct(this.category_id,this.categoryEditForm.value).then(()=>{
      this.router.navigate(["AdminHomePage/CategoryDetails"])
    });
  }
}

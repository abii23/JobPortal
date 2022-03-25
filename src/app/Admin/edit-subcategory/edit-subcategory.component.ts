import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';

@Component({
  selector: 'app-edit-subcategory',
  templateUrl: './edit-subcategory.component.html',
  styleUrls: ['./edit-subcategory.component.scss']
})
export class EditSubcategoryComponent implements OnInit {
  SubcategoryEditForm!:FormGroup;
  public SubcategoryList:any[]=[];
  StateList:any[]=[];
  districtList:any[]=[''];
  Subcategory_id:any;
  constructor(private route:Router,private fb:FormBuilder,private router:ActivatedRoute,private adminRegistration:AdminRegistrationService) {
    router.params.subscribe(catid =>{this.Subcategory_id=catid['id'];})
   }

  ngOnInit(): void {
    this.SubcategoryEditForm=this.fb.group({
      
      SubCategoryName:[''],
      SubCategoryDescription:['']
  });
  this.adminRegistration.getStateList().subscribe((data: any) => {         //to fetch data of state form firebase,getStateList() is on registration service page
    this.StateList = data;
    console.log(data)
  });

  this.adminRegistration.getDistrictList().subscribe((data: any) => {         //to fetch data of state form firebase
    this.districtList = data;
    console.log(data)
  });
  this.adminRegistration.getCompany().subscribe((data:any)=>{
    this.SubcategoryList =data;
    console.log(this.SubcategoryList)
  });
  if(this.Subcategory_id)
  {
    this.adminRegistration.getCategoryById(this.Subcategory_id).subscribe((result: any)=>{
      if(result){
        this.SubcategoryEditForm.patchValue(result);
      }
    });
  }
  else
  {
    alert("failed");
  }
}
submit(){
  this.adminRegistration.updateSubCategory(this.Subcategory_id,this.SubcategoryEditForm.value).then(()=>{
    this.route.navigate(["AdminHomePage/SubCategoryDetails"])
  });
}


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';

@Component({
  selector: 'app-post-wise-report',
  templateUrl: './post-wise-report.component.html',
  styleUrls: ['./post-wise-report.component.scss']
})
export class PostWiseReportComponent implements OnInit {
  SubcategoryList:any[]=['']
  postList:any[]=['']
  DistrictControl = new FormControl('');

  constructor(private adminRegistration:AdminRegistrationService,private route:Router,private router:ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.adminRegistration.getSubCategoryList().subscribe((data: any) => {         //to fetch data of state form firebase
      this.SubcategoryList = data;
      console.log(data)
    });
  }
  getLocation(){
    this.adminRegistration.getLocation().then((data:any[])=>(this.postList=data));
  }

  onChange(event: any) {
    console.log(this.DistrictControl.value);
    this.adminRegistration.getPostBySubCategory(this.DistrictControl.value)
    .subscribe(res => {
    console.log(res);
    this.postList = res;
    })
    
    }
    delete(Post_id:any){
      console.log(Post_id)
      if(confirm("Are you sure you want to delete this Post?")){
        this.adminRegistration.deletepost(Post_id).then(()=>
        {
        
        },
        (error:any)=>console.error(error)
        );
      }
    
  
  }

}

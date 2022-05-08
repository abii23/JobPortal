import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderSerService } from 'src/app/Services/provider-ser.service';

@Component({
  selector: 'app-applicant-view',
  templateUrl: './applicant-view.component.html',
  styleUrls: ['./applicant-view.component.scss']
})
export class ApplicantViewComponent implements OnInit {
  ApplicationList:any[]=[];
  company_id:any
  postList:any[]=['']
  PostControl = new FormControl('');
  count: any;

  constructor(private providerRegistration:ProviderSerService,private fb:FormBuilder,private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.company_id=localStorage.getItem("CompanyId")
    this.providerRegistration.getcompanywisepost(this.company_id).subscribe((data: any) => {         //to fetch data of state form firebase
      this.postList = data;
      console.log(data)
    });

   
  }
  getApplication(){
    this.company_id=localStorage.getItem("CompanyId")

    
    
    console.log(this.company_id)
    this.providerRegistration.getApplication(this.company_id).then((data:any[])=>
      {
        this.ApplicationList=data;
        console.log(this.ApplicationList);
       
      }
      );
   
  }
  delete(Post_id:any){
    console.log(Post_id);
    
    if(confirm("Are you sure you want to delete this employee record?")){
      this.providerRegistration.deletePost(Post_id).then(()=>
      {
        this.getApplication();
      },
      (error:any)=>console.error(error)
      );
    }

}
onChange(event: any) {
  console.log(this.PostControl.value);
  this.providerRegistration.getApplication(this.PostControl.value)
  .then(res => {
  console.log(res);
  this.ApplicationList = res;
  console.log(this.postList);
  this.count=this.ApplicationList.length;
  })
}

}

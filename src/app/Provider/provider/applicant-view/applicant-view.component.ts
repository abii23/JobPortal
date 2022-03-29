import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  constructor(private providerRegistration:ProviderSerService,private fb:FormBuilder,private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {

  }
  getApplication(){
    this.company_id=localStorage.getItem("CompanyId")

    
    
    console.log(this.company_id.value)
    this.providerRegistration.getApplication(this.company_id).subscribe((data:any[])=>(this.ApplicationList=data));
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
}

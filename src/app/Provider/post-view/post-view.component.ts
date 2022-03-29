import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderSerService } from 'src/app/Services/provider-ser.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})

export class PostViewComponent implements OnInit {
  public postList:any[]=[];

  company_id:any;
  Post_id:any;
  
  constructor(private route:Router,private router:ActivatedRoute,private fb:FormBuilder,private ProviderRegistration:ProviderSerService) { }
  
  ngOnInit(): void {
    // this.company_id:localStorage.getItem("CompanyId")
    this.getPost();
    
  }
  getPost(){
    this.company_id=localStorage.getItem("CompanyId")

    
    
    console.log(this.company_id.value)
    this.ProviderRegistration.getPost(this.company_id).subscribe((data:any[])=>(this.postList=data));
  }
  delete(Post_id:any){
    console.log(Post_id);
    
    if(confirm("Are you sure you want to delete this employee record?")){
      this.ProviderRegistration.deletePost(Post_id).then(()=>
      {
        this.getPost();
      },
      (error:any)=>console.error(error)
      );
    }

  }

}

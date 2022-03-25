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
  Post_id:any;

  constructor(private route:Router,private router:ActivatedRoute,private fb:FormBuilder,private ProviderRegistration:ProviderSerService) { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost(){
    this.ProviderRegistration.getPost().subscribe((data:any[])=>(this.postList=data));
  }
  delete(post_id:any){
    if(confirm("Are you sure you want to delete this employee record?")){
      this.ProviderRegistration.deletePost(post_id).then(()=>
      {
        this.getPost();
      },
      (error:any)=>console.error(error)
      );
    }

  }

}

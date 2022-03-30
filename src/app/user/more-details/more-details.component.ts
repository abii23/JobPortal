import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistrationService } from 'src/app/Services/admin-registration.service';
import { UserSerService } from 'src/app/Services/user-ser.service';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent implements OnInit {
  Post_id: any;
   PostList:any[]=[];


  constructor(private adminRegistrationService:AdminRegistrationService,private fb:FormBuilder,private router:Router,private route:ActivatedRoute) {
    route.params.subscribe(catid =>{this.Post_id=catid['id'];})
   }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.adminRegistrationService.getPostById(this.Post_id).subscribe((data:any[])=>{
      this.PostList=data;
    console.log(this.PostList);
    });
  }

}
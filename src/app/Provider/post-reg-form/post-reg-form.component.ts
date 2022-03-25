import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderSerService } from 'src/app/Services/provider-ser.service';

@Component({
  selector: 'app-post-reg-form',
  templateUrl: './post-reg-form.component.html',
  styleUrls: ['./post-reg-form.component.scss']
})
export class PostRegFormComponent implements OnInit {
  postReg!:FormGroup
  CategoryList:any[]=[''];
  SubCategoryList:any[]=[''];
  

  constructor(private fb:FormBuilder,private route:Router,private router:ActivatedRoute,private providerRegistration:ProviderSerService) { }

  ngOnInit(): void {
    this.providerRegistration.getCategoryList().subscribe((data: any) => {
      this.CategoryList = data;
      console.log(data)
    });
    this.providerRegistration.getSubCategoryList().subscribe((data: any) => {
      this.SubCategoryList = data;
      console.log(data)
    });
    this.postReg=this.fb.group({
      PostName:[''],
      Category:[''],
      SubCategory:[''],
      Experience:[''],
      Vacancy:[''],
      Description:['']

    })
  }
  SavePost(){
    this.providerRegistration.SavePost(this.postReg.value).then(()=>
    {
      this.route.navigate(['Provider/postView'])
    })
  }

}
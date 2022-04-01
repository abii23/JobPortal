import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from 'console';
import { UserSerService } from 'src/app/Services/user-ser.service';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.scss']
})
export class ViewMoreComponent implements OnInit {
  Post_id: any;
  public PostData:any;
  postdetails!:FormGroup;
  company_id:any
  public companyData:any;


  constructor(private route:Router,private router:ActivatedRoute,private userRegistration:UserSerService, private fb:FormBuilder) {
    router.params.subscribe(catid =>(this.Post_id=catid['id']));
   }

  ngOnInit(): void {


    this.postdetails=this.fb.group({
      PostName:['']


    })


    this.getPost();
    this.getCompanydata();
  }
  getPost(){

console.log(this.Post_id);


    this.userRegistration.getPost(this.Post_id).subscribe((result:any)=>{
      if (result){
        this.PostData=result;

        // this.postdetails.patchValue(result);
        console.log(this.PostData);
this.company_id=this.PostData.company_id
console.log(this.company_id);

      }
    });
    
    


    
    
   /*  console.log(this.Post_id)
    this.userRegistration.getPost(this.Post_id).subscribe((data:any[])=>{
    console.log(data);
      this.PostData=data;
    });
    console.log(this.PostData); */
    
  }
  getCompanydata()
  {
    this.userRegistration.getCompanyData(this.company_id).subscribe((result:any)=>{
      if(result)
      {
        console.log(this.company_id);
        
        this.companyData=result;
        console.log("hello");
        
        console.log(this.companyData);
        
      }
    })

  }

}

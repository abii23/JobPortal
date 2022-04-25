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
  public postdata: any[]=[]
  public companyData:any;


  constructor(private route:Router,private router:ActivatedRoute,private userRegistration:UserSerService, private fb:FormBuilder) {
    router.params.subscribe(catid =>(this.Post_id=catid['id']));

   }

  ngOnInit(): void {
    this.postdetails=this.fb.group({
     
    })

    console.log(this.Post_id);
   this.getPost();
   // this.getCompanydata();
  }
  getPost(){
    console.log(this.Post_id);
    this.userRegistration.getPost(this.Post_id).then((result:any)=>{
      if (result){
        // console.log("hi")
       // this.PostData=result;
       this.postdata=result;
        // this.postdetails.patchValue(result);
        console.log(this.postdata);
// this.company_id=this.PostData.company_id
// console.log(this.company_id);

      }
    });
   /*  console.log(this.Post_id)
    this.userRegistration.getPost(this.Post_id).subscribe((data:any[])=>{
    console.log(data);
      this.PostData=data;
    });
    console.log(this.PostData); */
    // this.getCompanydata();
  }
  getCompanydata()
  {

    console.log(this.PostData.value.company_id);
    this.userRegistration.getCompanyData(this.PostData.company_id).subscribe((result:any)=>{
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

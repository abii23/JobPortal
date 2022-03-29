import { Component, OnInit } from '@angular/core';
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
  PostData:any[]=[]

  constructor(private route:Router,private router:ActivatedRoute,private userRegistration:UserSerService) {
    router.params.subscribe(catid =>(this.Post_id=catid['id']));
   }

  ngOnInit(): void {
    this.getPost()
  }
  getPost(){



    this.userRegistration.getPost(this.Post_id).subscribe((result:any)=>{
      if (result){
        console.log(result);
      }
    });



    
    
   /*  console.log(this.Post_id)
    this.userRegistration.getPost(this.Post_id).subscribe((data:any[])=>{
    console.log(data);
      this.PostData=data;
    });
    console.log(this.PostData); */
    
  }

}

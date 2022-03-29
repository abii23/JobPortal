import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSerService } from 'src/app/Services/user-ser.service';

@Component({
  selector: 'app-your-application',
  templateUrl: './your-application.component.html',
  styleUrls: ['./your-application.component.scss']
})
export class YourApplicationComponent implements OnInit {
  ApplicationList:any[]=[''];
  userid:any
  Application_id:any

  constructor(private route:Router,private router:ActivatedRoute,private userService:UserSerService) { }

  ngOnInit(): void {
    
    this.getApplication();
  }
  getApplication(){
    this.userid=localStorage.getItem("userid")
    this.userService.getApplication(this.userid).subscribe((data:any[])=>(this.ApplicationList=data));
  }
  delete(Application_id:any){
    if(confirm("Are you sure you want to delete this employee record?")){
      this.userService.DeleteApplication(Application_id).then(()=>
      {
        this.getApplication();
      },
      (error:any)=>console.error(error)
      );
    }
  }

  

}

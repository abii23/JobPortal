import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSerService } from 'src/app/Services/user-ser.service';
import firebase from 'firebase/compat';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  public PostList:any[]=[];
  appUser!:firebase.User;
  mydate:any;
  
  constructor(private UserRegistration:UserSerService,private route:Router,private datePipe:DatePipe) 
  {
    this.UserRegistration.appUser$.subscribe((appUser:any)=>(this.appUser=appUser));
   }

  ngOnInit(): void {
    this.PostListget()
    
  }
  PostListget(){


this.mydate=this.datePipe.transform(new Date().toLocaleDateString(),'yyyy-MM-dd')

    this.UserRegistration.getPostList(this.mydate).then((data:any[])=>{
      this.PostList=data;
      console.log(this.PostList);
    });
   
    
  }
  
}

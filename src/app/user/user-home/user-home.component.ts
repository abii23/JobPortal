import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSerService } from 'src/app/Services/user-ser.service';
import firebase from 'firebase/compat';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  public PostList:any[]=[];
  appUser!:firebase.User;
  
  
  constructor(private UserRegistration:UserSerService,private route:Router) 
  {
    this.UserRegistration.appUser$.subscribe((appUser:any)=>(this.appUser=appUser));
   }

  ngOnInit(): void {
    this.PostListget()
    
  }
  PostListget(){
    this.UserRegistration.getPostList().then((data:any[])=>{
      this.PostList=data;
      console.log(this.PostList);
    });
   
    
  }
  
}

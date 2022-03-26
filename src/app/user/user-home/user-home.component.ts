import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSerService } from 'src/app/Services/user-ser.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  public PostList:any[]=[];
  
  constructor(private UserRegistration:UserSerService,private route:Router) { }

  ngOnInit(): void {
    
  }
  getSubCategories(){
    this.UserRegistration.getPostList().subscribe((data:any[])=>(this.PostList=data));
  }
}

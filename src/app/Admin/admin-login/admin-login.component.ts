import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from 'src/app/Services/admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  savestatus=false;
  AdminLoginForm!:FormGroup;

  constructor(private route:Router,private adminLoginService:AdminLoginService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.AdminLoginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]

    })
  }
  onsubmit() {

    if(!this.AdminLoginForm.valid)
    {
      this.savestatus=true
      return;
    }
    else
    {
    this.adminLoginService.login(this.AdminLoginForm.value).then(res=> {this.route.navigate(['/AdminHomePage'])}).catch(er=> {
    alert('invalid username')
    })
  }

    } 
    }

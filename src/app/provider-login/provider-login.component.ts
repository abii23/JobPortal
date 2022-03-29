import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderSerService } from '../Services/provider-ser.service';

@Component({
  selector: 'app-provider-login',
  templateUrl: './provider-login.component.html',
  styleUrls: ['./provider-login.component.scss']
})
export class ProviderLoginComponent implements OnInit {
  ProviderLoginForm!:FormGroup
  productList:any[]=[];
  emailControl = new FormControl('');
  passwordControl=new  FormControl('');

  constructor(private providerService:ProviderSerService,private fb:FormBuilder,private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.ProviderLoginForm = this.fb.group({
     
    })
  }
  onsubmit() {
    console.log(this.ProviderLoginForm.value)
    this.providerService.Providerlogin(this.emailControl.value, this.passwordControl.value)
    .subscribe(res => {
    console.log(res)
    this.productList = res;
if(this.productList.length>0)
{
  localStorage.setItem('CompanyId',this.productList.map(t=>t.CompanyId).toString())
  this.route.navigate(['/Provider']);
}
else
{
  alert("invalid")
}


    })
    } 
}

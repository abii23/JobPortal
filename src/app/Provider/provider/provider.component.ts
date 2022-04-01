import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProviderSerService } from 'src/app/Services/provider-ser.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {
  company_id: any;
  postList:any[]=[''];
  company_details: any;

  constructor(private fb:FormBuilder,private providerRegistrtaion:ProviderSerService) { }

  ngOnInit(): void {
    this.getProviderDetails();
    const details = localStorage.getItem('company_details') 
    this.company_details = JSON.parse(details ? details : '[]')
  }
  getProviderDetails(){
    console.log("hello");
    
    this.company_id=localStorage.getItem("CompanyId")

    
    
    console.log(this.company_id)
    this.providerRegistrtaion.getProviderDetails(this.company_id).subscribe((data:any[])=>(this.postList=data));
    console.log(this.postList)
  }
  getPostByCompany()
  {
    
  }
  
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSerService } from 'src/app/Services/user-ser.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {
ApplicationForm!:FormGroup
Post_id:any


  constructor(private fb:FormBuilder,private route:Router,private userRegistration:UserSerService,router:ActivatedRoute)
   {
    router.params.subscribe(catid =>{this.Post_id=catid['id'];})
    }

  ngOnInit(): void {
 

 
    this.ApplicationForm=this.fb.group({
      UserName:[''],
      Experience:[''],
      Education:[''],
      ExpectedSalary:[''],
      Description:[''],
      User_id:localStorage.getItem("userid"),
      Post_id:[this.Post_id],

     

    })
    console.log(this.Post_id);
  }
  SavePost(){
    this.userRegistration.SavePost(this.ApplicationForm.value).then(()=>
    {
      this.route.navigate(['/user'])
    })
  }

}

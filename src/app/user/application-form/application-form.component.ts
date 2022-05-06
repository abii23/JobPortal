import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  savestatus= false;


  constructor(private fb:FormBuilder,private route:Router,private userRegistration:UserSerService,router:ActivatedRoute)
   {
    router.params.subscribe(catid =>{this.Post_id=catid['id'];})
    }

  ngOnInit(): void {
 

 
    this.ApplicationForm=this.fb.group({
      UserName:['',Validators.required],
      Experience:['',Validators.required],
      Education:['',Validators.required],
      ExpectedSalary:['',Validators.required],
      Description:[''],
      email:['',Validators.required],
      ContactNum:['',Validators.required],

      User_id:localStorage.getItem("userid"),
      Post_id:[this.Post_id],

     

    })
    console.log(this.Post_id);
  }
  SavePost(){

    if(!this.ApplicationForm.valid)
    {
      this.savestatus=true
      return;
    }
    else
    {
    this.userRegistration.SavePost(this.ApplicationForm.value).then(()=>
    {
      this.route.navigate(['/user'])
    })
  }

}
}

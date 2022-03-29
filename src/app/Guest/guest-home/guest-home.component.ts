import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSerService } from 'src/app/Services/user-ser.service';
import firebase from "firebase/compat/app";


@Component({
  selector: 'app-guest-home',
  templateUrl: './guest-home.component.html',
  styleUrls: ['./guest-home.component.scss']
})
export class GuestHomeComponent implements OnInit {
  appUser!: firebase.User;


  constructor(private userRegistration: UserSerService,
    private router: Router
    ) { 
      this.userRegistration.appUser$.subscribe((appUser : any) => (this.appUser =
        appUser));
      }
        
      login() {
        
          this.userRegistration.login();
          
          
    }

  ngOnInit(): void {
  }

}

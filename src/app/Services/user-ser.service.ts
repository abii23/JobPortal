import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from "firebase/compat/app";

import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSerService {
  currentUserDetails:any[]=[''];
  appUser$: any;

 

  constructor(public afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private afs: AngularFirestore) {

      this.appUser$ = this.afAuth.authState;

     }
  getDistrictList() {                                               //select datas from district collection for select box
    return this.afs.collection<any>("District").snapshotChanges()
      .pipe(map((item: any) => {
        const catData: any[] = []
        if (item) {
          // console.log(item)
          item.forEach((el: any) => {
            catData.push({
              id: el.payload.doc.id,
              ...el.payload.doc.data()
            })
          })
        }
        return catData;
      }))
    }
    getLocationList() {                                               //select datas from district collection for select box
      return this.afs.collection<any>("Location").snapshotChanges()
        .pipe(map((item: any) => {
          const catData: any[] = []
          if (item) {
            // console.log(item)
            item.forEach((el: any) => {
              catData.push({
                id: el.payload.doc.id,
                ...el.payload.doc.data()
              })
            })
          }
          return catData;
        }))
      }
      

      login() {
        // Store the return URL in localstorage, to be used once the user logs in successfully
        console.log("hello")
        const returnUrl =
        this.route.snapshot.queryParamMap.get("returnUrl") || this.router.url;
        localStorage.setItem("returnUrl", returnUrl);
        this.afAuth
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        }
        
        getPostList() {
          return this.afs.collection<any>("Post").snapshotChanges()
            .pipe(map((item: any) => {
              const catData: any[] = []
              if (item) {
                // console.log(item)
                item.forEach((el: any) => {
                  catData.push({
                    id: el.payload.doc.id,
                    ...el.payload.doc.data()
                  })
                })
              }
              return catData;
            }))
        }
        
}

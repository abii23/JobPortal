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
    return this.afs.collection<any>("Collection_District").snapshotChanges()
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
      return this.afs.collection<any>("Collection_Location").snapshotChanges()
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
      

      
      getPostList(){
          const post=this.afs.collection("Collection_Post").valueChanges({idField:"Post_id"});
          console.log(post)
          return post;
        }
        SavePost(Location :any){
          const categorydata=JSON.parse(JSON.stringify(Location));
          return this.afs.collection("Collection_ApplyDetails").add(categorydata);
          
        }
        
        getApplication(userid:any)
  {
    console.log(userid);
      return this.afs.collection('Collection_ApplyDetails', (ref) => ref.where("User_id", "==", userid)) .valueChanges({ idField: "Application_id" })
  }
  DeleteApplication(user_id:any)
  {
    console.log(user_id)
    return this.afs.doc("Collection_ApplyDetails/"+user_id).delete();
 
  }
  getLocationByDistrict(DistrictId: any) {                                 //select location using district id
    console.log(DistrictId);
    return this.afs.collection('Collection_Location', (ref) => ref.where("District",
    "==", DistrictId))
    .valueChanges({ idField: "Location_Id" })
    } 
    getLocationById(location_id: any) {
      const productData = this.afs.doc<any>("Collection_Location/" + location_id).valueChanges();
  
      return productData;
    }
    updateUser(User_id:string, user:any){
      //const categoryData= JSON.parse(JSON.stringify(category_id));
      
      return this.afs.doc("Collection_user/" +User_id).update(user);
    }
    getPost(post_id:any){
    /*   console.log(post_id);
      return this.afs.collection('Post', (ref) => ref.where("id",
      "==", post_id))
      .valueChanges({ idField: "post_id" }) */
      const postData = this.afs
      .doc<any>("Collection_Post/" + post_id)
      .valueChanges();

    return postData;


    }

        login() {
          // Store the return URL in localstorage, to be used once the user logs in successfully
          const returnUrl =
            this.route.snapshot.queryParamMap.get("returnUrl") || this.router.url;
        
          localStorage.setItem("returnUrl", returnUrl);
        
          this.afAuth
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(async (res: any) => { 
              console.log(res);
              const userDetails = { 
                uid: res.user.uid,
                status:false,
               
              } 
               this.afs.doc(`Collection_user/${userDetails.uid}`)
                .set(userDetails) 
                .then(res => {
                  console.log(res)
                  localStorage.setItem('userid',userDetails.uid);
                  this.router.navigate(['/UserRegistration']);
                  
                })
                .catch(err => {
                  console.log(err)
                  reject(err)
                })
            })
        }
         
        }
        function reject(err: any) {
        throw new Error('Function not implemented.');
        }
      



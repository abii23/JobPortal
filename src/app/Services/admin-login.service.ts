import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(public afAuth:AngularFireAuth,private afs:AngularFirestore) { }
  login(user: any) {
    return new Promise((resolve, reject) => {
     this.afAuth.signInWithEmailAndPassword(user.email, user.password)
     .then((res: any) => {
     resolve(true)
     }
     
     )
     .catch(err => {
     reject(err)
     })
     }) }
    
}

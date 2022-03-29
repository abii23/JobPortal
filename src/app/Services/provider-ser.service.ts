import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderSerService {

  constructor(private afs:AngularFirestore,afAuth:AngularFireAuth) { }
  
  SavePost(PostDetails :any){
    const PostData=JSON.parse(JSON.stringify(PostDetails));
    return this.afs.collection("Post").add(PostData);
    
  }
  getCategoryList() {
    return this.afs.collection<any>("category").snapshotChanges()
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
  getSubCategoryList() {
    return this.afs.collection<any>("SubCategory").snapshotChanges()
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
  
  getPost(Company_id:any)
  {
    console.log(Company_id);
      return this.afs.collection('Post', (ref) => ref.where("company_id", "==", Company_id)) .valueChanges({ idField: "company_id" })
  }

  deletePost(Post_id:any)
  {
    console.log(Post_id)
    return this.afs.doc("Post/"+Post_id).delete();
 
  }
  getlogin(Login: any) {                                 //select location using district id
    console.log(Login);
    return this.afs.collection('CompanyDetails', (ref) => ref.where("CompanyEmail",
    "==", Login))
    .valueChanges({ idField: "Company_Id" })
    } 

    Providerlogin(username: any, password :any)
    {
      return this.afs.collection('CompanyDetails', (ref) => ref.where("CompanyEmail","==", username).where("Password","==",password) ).valueChanges({ idField: "CompanyId" })




    }
    getLocationList() {
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
    getApplication(Company_id:any)
    {
      console.log(Company_id);
        return this.afs.collection('Collection_ApplyDetails', (ref) => ref.where("company_id", "==", Company_id)) .valueChanges({ idField: "company_id" })
    }

}

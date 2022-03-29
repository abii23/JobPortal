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
    return this.afs.collection("Collection_Post").add(PostData);
    
  }
  getCategoryList() {
    return this.afs.collection<any>("Collection_category").snapshotChanges()
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
    return this.afs.collection<any>("Collection_Subcategory").snapshotChanges()
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
      return this.afs.collection('Collection_Post', (ref) => ref.where("company_id", "==", Company_id)) .valueChanges({ idField: "Post_id" })
  }

  deletePost(Post_id:any)
  {
    console.log(Post_id)
    return this.afs.doc("Collection_Post/"+Post_id).delete();
 
  }
  getlogin(Login: any) {                                 //select location using district id
    console.log(Login);
    return this.afs.collection('Collection_CompanyDetails', (ref) => ref.where("CompanyEmail",
    "==", Login))
    .valueChanges({ idField: "Company_Id" })
    } 

    Providerlogin(username: any, password :any)
    {
      return this.afs.collection('Collection_CompanyDetails', (ref) => ref.where("CompanyEmail","==", username).where("Password","==",password) ).valueChanges({ idField: "CompanyId" })




    }
    getLocationList() {
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
    getApplication(Company_id:any)
    {
    return new Promise<any[]>((resolve, reject) => {
      const Location = this.afs
      .collection<any>("Collection_Post", (ref) => ref.where("company_id", "==" ,Company_id))
      .valueChanges({ idField: "Post_id" })
      .subscribe(prodRes => {
        this.getApplicantList().subscribe(res => {
          prodRes.forEach(el => {
            el.Company_name = res.find(el1 => el1.id === el.Coompany_id)?.Company_name
          })
          resolve(prodRes)
        })
      })
    })

}
getApplicantList() {                                               //select datas from district collection for select box
  return this.afs.collection<any>("Collection_ApplyDetails").snapshotChanges()
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
  PostById(Post_id: any) {
    const CompanyData = this.afs.doc<any>("Collection_Post/" + Post_id).valueChanges();

    return CompanyData;
  }
  updatePost(Post_id:string, Post:any){
    // const CompanyData= JSON.parse(JSON.stringify(Company_id));
     
     return this.afs.doc("Collection_Post/" +Post_id).update(Post);
   }
   getPostList() {
    return this.afs.collection<any>("Collection_Post").snapshotChanges()
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

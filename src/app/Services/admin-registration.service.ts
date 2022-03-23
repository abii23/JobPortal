import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminRegistrationService {

  constructor(public afAuth:AngularFireAuth,private afs:AngularFirestore) { }
  SaveCategory(category :any){
    const categorydata=JSON.parse(JSON.stringify(category));
    return this.afs.collection("category").add(categorydata);
    
  }
  getCategories()
  {
    const Category=this.afs.collection("category").valueChanges({idField:"category_id"});
    return Category;
  }
  deleteCategory(category_id:any)
  {
    return this.afs.doc("category/"+category_id).delete();
  }
  updateProduct(category_id:string,category:any){
    const categoryData= JSON.parse(JSON.stringify(category_id));
    console.log("hwlo");
    
    return this.afs.doc("category/" +category_id).update(categoryData);
  }
  getCategoryList() {
    return this.afs.collection<any>("category").snapshotChanges()
      .pipe(map((item: any) => {
        const catData: any[] = []
        if (item) {
          //console.log(item)
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
  getCategoryById(category_id: any) {
    const productData = this.afs.doc<any>("category/" + category_id).valueChanges();

    return productData;
  }
}

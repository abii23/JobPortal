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
  updateProduct(category_id:string, category:any){
    //const categoryData= JSON.parse(JSON.stringify(category_id));
    
    return this.afs.doc("category/" +category_id).update(category);
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
  getCategoryById(category_id: any) {
    const productData = this.afs.doc<any>("category/" + category_id).valueChanges();

    return productData;
  }
  SaveSubCategory(Subcategory :any){
    const Subcategorydata=JSON.parse(JSON.stringify(Subcategory));
    return this.afs.collection("Subcategory").add(Subcategorydata);
    
  }
  getSubCategories()
  {
    const Category=this.afs.collection("Subcategory").valueChanges({idField:"Subcategory_id"});
    return Category;
  }
  deleteSubCategory(Subcategory_id:any)
  {
    return this.afs.doc("Subcategory/"+Subcategory_id).delete();
  }

  updateSubCategory(Subcategory_id:string, Subcategory:any){
    //const categoryData= JSON.parse(JSON.stringify(category_id));
    
    return this.afs.doc("Subcategory/" +Subcategory_id).update(Subcategory);
  }
  getSubCategoryList() {
    return this.afs.collection<any>("Subcategory").snapshotChanges()
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
  SaveCompany(companyDetails :any){
    const companyData=JSON.parse(JSON.stringify(companyDetails));
    return this.afs.collection("CompanyDetails").add(companyData);
    
  }
  getStateList() {
    return this.afs.collection<any>("State").snapshotChanges()
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

      getCompany()
  {
    const Company=this.afs.collection("CompanyDetails").valueChanges({idField:"CompanyDetails_id"});
    return Company;
  }

  updateCompany(Company_id:string, Company:any){
   // const CompanyData= JSON.parse(JSON.stringify(Company_id));
    
    return this.afs.doc("CompanyDetails/" +Company_id).update(Company);
  }
  getCompanyById(Company_id: any) {
    const CompanyData = this.afs.doc<any>("Companydetails/" + Company_id).valueChanges();

    return CompanyData;
  }
  getCompanyList() {
    return this.afs.collection<any>("CompanyDetails").snapshotChanges()
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

  deleteCompany(Company_id:any)
  {
    return this.afs.doc("CompanyDetails/"+Company_id).delete();
  }
 
  SaveLocationdata(Location :any){
    const categorydata=JSON.parse(JSON.stringify(Location));
    return this.afs.collection("Location").add(categorydata);
    
  }

  getLocation() {                                                 //to select by id 
    return new Promise<any[]>((resolve, reject) => {
      const Product = this.afs
      .collection<any>("Location", (ref) => ref.orderBy("LocationName"))
      .valueChanges({ idField: "LocationId" })
      .subscribe(prodRes => {
        this.getDistrictList().subscribe(res => {
          prodRes.forEach(el => {
            el.category = res.find(el1 => el1.id === el.category)?.categoryname
          })
          resolve(prodRes)
        })
      })
    })

  }
  deleteLocation(Location_id:any)
  {
    console.log(Location_id)
    return this.afs.doc("Location/"+Location_id).delete();
  }

  getProductByCategory(DistrictId: any) {                                 //select location using district id
    console.log(DistrictId);
    return this.afs.collection('Location', (ref) => ref.where("District",
    "==", DistrictId))
    .valueChanges({ idField: "Location_Id" })
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
    getLocationById(location_id: any) {
      const productData = this.afs.doc<any>("Location/" + location_id).valueChanges();
  
      return productData;
    }
    updateLocation(Location_id:string, category:any){
      //const categoryData= JSON.parse(JSON.stringify(category_id));
      
      return this.afs.doc("Location/" +Location_id).update(category);
    }
    getLocationByDistrict(DistrictId: any) {                                 //select location using district id
      console.log(DistrictId);
      return this.afs.collection('Location', (ref) => ref.where("District",
      "==", DistrictId))
      .valueChanges({ idField: "Location_Id" })
      } 

    }



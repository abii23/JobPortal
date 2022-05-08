import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
  import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminRegistrationService {

  constructor(public afAuth:AngularFireAuth,private afs:AngularFirestore,private angularfirestorage:AngularFireStorage) { }
  SaveCategory(category :any){
    const categorydata=JSON.parse(JSON.stringify(category));
    return this.afs.collection("Collection_category").add(categorydata);
    
  }
  getCategories()
  {
    const Category=this.afs.collection("Collection_category").valueChanges({idField:"category_id"});
    return Category;
  }
  deleteCategory(category_id:any)
  {
    return this.afs.doc("Collection_category/"+category_id).delete();
  }
  updateProduct(category_id:string, category:any){
    //const categoryData= JSON.parse(JSON.stringify(category_id));
    
    return this.afs.doc("Collection_category/" +category_id).update(category);
  }
  getCategoryList() {
    return this.afs.collection<any>("Collection_category").snapshotChanges()
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
    const productData = this.afs.doc<any>("Collection_category/" + category_id).valueChanges();

    return productData;
  }
  getSubCategoryById(category_id: any) {
    const productData = this.afs.doc<any>("Collection_Subcategory/" + category_id).valueChanges();

    return productData;
  }
  SaveSubCategory(Subcategory :any){
    const Subcategorydata=JSON.parse(JSON.stringify(Subcategory));
    return this.afs.collection("Collection_Subcategory").add(Subcategorydata);
    
  }
  getSubCategories()
  {
    // const Category=this.afs.collection("Collection_Subcategory").valueChanges({idField:"Subcategory_id"});
    // return Category;
    return new Promise<any[]>((resolve, reject) => {
      const Location = this.afs
      .collection<any>("Collection_Subcategory", (ref) => ref.orderBy("SubCategoryName") )
      .valueChanges({ idField: "SubCategory_id" })
      .subscribe(prodRes => {
        this.getCategoryList().subscribe(res => {
          prodRes.forEach(el => {
            el.CategoryName = res.find(el1 => el1.id === el.category)?.CategoryName
          })
          
          
          resolve(prodRes)
          
          
        
        })
      })
    })



    


  
  }
  deleteSubCategory(Subcategory_id:any)
  {
    return this.afs.doc("Collection_Subcategory/"+Subcategory_id).delete();
  }

  updateSubCategory(Subcategory_id:string, Subcategory:any){
    //const categoryData= JSON.parse(JSON.stringify(category_id));
    
    return this.afs.doc("Collection_Subcategory/" +Subcategory_id).update(Subcategory);
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
  SaveCompany(companyDetails :any){
    const companyData=JSON.parse(JSON.stringify(companyDetails));
    return this.afs.collection("Collection_CompanyDetails").add(companyData);
    
  }
  getStateList() {
    return this.afs.collection<any>("Collection_State").snapshotChanges()
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
      return this.afs.collection<any>("Collection_District",(ref)=>ref.orderBy("DistrictName")).snapshotChanges()
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
    const Company=this.afs.collection("Collection_CompanyDetails").valueChanges({idField:"CompanyDetails_id"});
    return Company;
  }

  updateCompany(Company_id:string, Company:any){
   // const CompanyData= JSON.parse(JSON.stringify(Company_id));
    
    return this.afs.doc("Collection_CompanyDetails/" +Company_id).update(Company);
  }
  getCompanyById(Company_id: any) {
    const CompanyData = this.afs.doc<any>("Collection_CompanyDetails/" + Company_id).valueChanges();

    return CompanyData;
  }
  getCompanyList() {
    return this.afs.collection<any>("Collection_CompanyDetails").snapshotChanges()
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
    return this.afs.doc("Collection_CompanyDetails/"+Company_id).delete();
  }
 
  SaveLocationdata(Location :any){
    const categorydata=JSON.parse(JSON.stringify(Location));
    return this.afs.collection("Collection_Location").add(categorydata);
    
  }

  getLocation() {                                                 //to select by id 
    return new Promise<any[]>((resolve, reject) => {
      const Product = this.afs
      .collection<any>("Collection_Location", (ref) => ref.orderBy("LocationName"))
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
  getpost() {                                                 //to select by id 
    return new Promise<any[]>((resolve, reject) => {
      const Product = this.afs
      .collection<any>("Collection_post", (ref) => ref.orderBy("PostName"))
      .valueChanges({ idField: "PostId" })
      .subscribe(prodRes => {
        this.getCategoryList().subscribe(res => {
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
    return this.afs.doc("Collection_Location/"+Location_id).delete();
  }
  deletepost(Location_id:any)
  {
    console.log(Location_id)
    return this.afs.doc("Collection_Post/"+Location_id).delete();
  }

  getCompanyByLocation(DistrictId: any) {                                 //select location using district id
    console.log(DistrictId);
    return this.afs.collection('Collection_CompanyDetails', (ref) => ref.where("CompanyDistrict",
    "==", DistrictId))
    .valueChanges({ idField: "Location_Id" })
    } 
    getUserByLocation(DistrictId: any) {                                 //select location using district id
      console.log(DistrictId);
      return this.afs.collection('Collection_user', (ref) => ref.where("UserDistrict",
      "==", DistrictId))
      .valueChanges({ idField: "Location_Id" })
      } 

    getProductByCategory(DistrictId: any) {                                 //select location using district id
      console.log(DistrictId);
      return this.afs.collection('Collection_Location', (ref) => ref.where("District",
      "==", DistrictId))
      .valueChanges({ idField: "Location_Id" })
      } 
    getPostBySubCategory(SubcatId: any) {                                 //select location using district id
      console.log(SubcatId);
      return this.afs.collection('Collection_Post', (ref) => ref.where("SubCategory",
      "==", SubcatId))
      .valueChanges({ idField: "Post_Id" })
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
    getLocationById(location_id: any) {
      const productData = this.afs.doc<any>("Collection_Location/" + location_id).valueChanges();
  
      return productData;
    }
    updateLocation(Location_id:string, category:any){
      //const categoryData= JSON.parse(JSON.stringify(category_id));
      
      return this.afs.doc("Collection_Location/" +Location_id).update(category);
    }
    getLocationByDistrict(DistrictId: any) {                                 //select location using district id
      console.log(DistrictId);
      return this.afs.collection('Collection_Location', (ref) => ref.where("District","==",DistrictId)).valueChanges({ idField: "Location_Id" })
      } 
      

      upload(file: any) {
        const path = `Images/${Date.now()}_${file.name}`;
        const ref = this.angularfirestorage.ref(path);
        const task = this.angularfirestorage.upload(path, file);
        return new Promise((resolve, reject) => {
          task.then(async (res) => {
            res.ref.getDownloadURL()
              .then(url => {
                console.log(url)
                resolve(url);
              })
              .catch((err) => {
                console.log(err.message_);
                reject(err.code_)
              })
          })
            .catch((err) => {
              console.log(err.message_);
              reject(err.code_)
            })
        })
      }
      



      getPostById(post_id: any) {
       
       
          return this.afs.collection('Collection_Post', (ref) => ref.where(ref.id,
        "==", post_id))
        .valueChanges({ idField: "Post_Id" })  

       


        
       




       /*  const productData = this.afs.doc<any>("Collection_category/" + post_id).valueChanges();

        return productData; */
      }

      getPostList(){
         


        return new Promise<any[]>((resolve, reject) => {
          const Location = this.afs
          .collection<any>("Collection_CompanyDetails", (ref) => ref.orderBy("CompanyDistrict") )
          .valueChanges({ idField: "Company_id" })
          .subscribe(prodRes => {
            this.getDistict().subscribe(res => {
              prodRes.forEach(el => {
                el.DistrictName = res.find(el1 => el1.id === el.CompanyDistrict)?.DistrictName
              })
              
              
              resolve(prodRes)
            })
            this. getLocationListq().subscribe(res => {
              prodRes.forEach(el => {
                el.LocationName = res.find(el1 => el1.id === el.CompanyLocation)?.LocationName
              })
              
              
              resolve(prodRes)
            })
          })
        })



        


      }

      getDistict()
      {
       

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

      getLocationListq()
      {
       

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
      CheckCompany(Name: any, CompanyEmail :any)
    {
      return this.afs.collection('Collection_CompanyDetails', (ref) => ref.where("CompanyName","==", Name)
      .where("CompanyEmail","==",CompanyEmail) ).valueChanges({ idField: "CompanyId" })
      .pipe(tap(val => {
        console.log(val)
      }))


    
    }

  }

import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { APIViewModel } from "../Models/APIViewModel"

@Injectable({
    providedIn: 'root'
})
export class ProductServices {
    constructor(private http: HttpClient) { }
    // url: string = environment.apiUrl
    // addProduct(Product: ProudctViewModel) {
    //     return this.http.post<APIViewModel>(this.url + "Student/post", Product)
    // }
    // getStudent() {
    //     return this.http.get<APIViewModel>(environment.apiUrl + "Student/get")
    // }
    // getStudentById(ID: number) {
    //     return this.http.get<APIViewModel>(environment.apiUrl + "Student/getbyid?id=" + ID)
    // }

    // deleteStudent(ID: number) {
    //     return this.http.delete<APIViewModel>(this.url + "Student/delete?id=" + ID)
    // }
    // updateStudent(Product: ProudctViewModel) {
    //     return this.http.put<APIViewModel>(this.url + "Student/put", Product)
    // }
    GetProduct(page: number, size: number) {

        return this.http.get<APIViewModel>(`https://localhost:63000/Api/Getproduct?PageSize=${size}&PageIndex=${page}`);

    }

    getallcategories() {
        return this.http.get<APIViewModel>("https://localhost:63000/Api/GetCaterory")
    }
    getallbrands() {
        return this.http.get<APIViewModel>("https://localhost:63000/Api/GetBrands")
    }
    getproductbycategoty(keyword: number) {
        console.log(keyword)
        return this.http.get<any>("https://localhost:63000/Api/Getproduct?categoryID=" + keyword)
    }
    getproductbyVendor(vendorID:string){
        return this.http.get<APIViewModel>(`https://localhost:63000/Api/Getproduct?vendorID=${vendorID}`);
    }
    getProductById(id: any) {
        return this.http.get<any>("https://localhost:63000/ProductDetails?ID=" + id)

    }
    searchProduct(val:string)
  {
    return this.http.get<any>(`https://localhost:63000/Api/Getproduct?CategoryName=${val}&NameAr=${val}&NameEn=${val}`);
  }


}








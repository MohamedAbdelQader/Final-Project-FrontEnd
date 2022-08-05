import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { APIViewModel } from '../Models/APIViewModel';
import { cartEditViewModel, cartViewModel } from '../Models/cart';
import { AuthService } from './Auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public CartItemList :any =[]
  public ProductList = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient,private auth:AuthService) { }

  getProducts(){
    let uid = localStorage.getItem("")
    return this.http.get<APIViewModel>("https://localhost:63000/Cart/Get?UserID="+this.auth.GetCurrentUserID())
  }

  setProduct(Product :any){
    this.CartItemList.push(...Product);
    this.ProductList.next(Product);
  }
  addtocart(Product:cartEditViewModel){
    Product.Quantity = 1;
    return this.http.post<cartViewModel>("https://localhost:63000/Cart/Add",Product)
  }
  getTotalPrice() :number {
    let grandTotal=0;
    this.CartItemList.map((a:any)=>{
      grandTotal +=a.total;
    })
    return grandTotal;
  }
  removeCartItem(id:number){
    console.log(id);
    return this.http.delete<APIViewModel>("https://localhost:63000/Cart/Remove?ID="+id)

  }
  removeAllCart(){
    this.CartItemList=[]
    this.ProductList.next(this.CartItemList);
  }
  updatequantity(cartEditViewModel: cartEditViewModel){
    return this.http.post<APIViewModel>("https://localhost:63000/Cart/Update",cartEditViewModel)
  }
}
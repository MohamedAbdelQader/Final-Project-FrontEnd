import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIViewModel } from '../Models/APIViewModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
public userid:any=[];
public orderid:any=[];
  constructor(private http:HttpClient) { }


  order(userid:string){
  
    return this.http.post<APIViewModel>("https://localhost:63000/Order/AddApi",{UserID:userid})
  }
  orderdetails(orderid:string){
    return this.http.get<APIViewModel>("https://localhost:63000/OrderDetails/Add")
  }
  Getorder(id:number){
    return this.http.get<APIViewModel>("https://localhost:63000/Order/GetForUser?ID="+id)
  }
}

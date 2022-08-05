import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { APIViewModel } from '../Models/APIViewModel';
import { FavouriteEditViewModel, FavouriteViewModel } from '../Models/FavouriteViewModel';

@Injectable({
  providedIn: 'root'
})
export class faviourtService {
  public faviourtItemList :any =[]
  public ProductList = new BehaviorSubject<any>([]);

  constructor(private http : HttpClient) { }

  
  getProducts(id:string){
    return this.http.get<APIViewModel>("https://localhost:63000/Favourite/Get?UserID="+id)
  }

  // setProduct(Product :any){
  //   this.faviourtItemList.push(...Product);
  //   this.ProductList.next(Product);
  // }
  addtofaviourt(Product:FavouriteEditViewModel){
    // this.faviourtItemList.push(Product);
    // this.ProductList.next(this.faviourtItemList);
    return this.http.post<FavouriteViewModel>("https://localhost:63000/Favourite/Add",Product)
  }
  removeAllCart(id:number){
    // this.faviourtItemList=[]
    // this.ProductList.next(this.faviourtItemList);
    return this.http.post<FavouriteViewModel>("https://localhost:63000/Favourite/Remove?ID="+id,null)
  }
}

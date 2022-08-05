import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIViewModel } from '../Models/APIViewModel';
import { CollectionCodeViewModel } from '../Models/CollectionCodeViewModel';
import { CollectionProductViewModel } from '../Models/CollectionProductViewModel';
import { CollectionEditViewModel, CollectionViewModel } from '../Models/CollectionViewModel';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http: HttpClient) { }
  private MarkterID: any = localStorage.getItem('id');

  getcollectionbyID(id: number) {
    return this.http.get<APIViewModel>("https://localhost:63000/Collection/GetDetails?ID=" + id)
  }
  addCollection(RegisterView: CollectionEditViewModel) {
    console.log(RegisterView)
    return this.http.post<APIViewModel>("https://localhost:63000/Api/AddCollection", RegisterView);
  }
  getCollections() {
    return this.http.get<APIViewModel>("https://localhost:63000/Api/GetCollection?id=" + this.MarkterID);
  }
  addCollectionProducts(list:CollectionProductViewModel[]){
    return this.http.post<APIViewModel>("https://localhost:63000/CollectionDetails/AddAPI",list)
  }
  removeCollection(val:CollectionEditViewModel){
    return this.http.post<APIViewModel>("https://localhost:63000/Collection/Delete",val)
  }

  getProductsBycollectionID(id: number) {
    return this.http.get<APIViewModel>("https://localhost:63000/CollectionDetails/Get?CollectionID=" + id)
  }
  GetCollectionByCode(Code:string) {
    return this.http.get<APIViewModel>("https://localhost:63000/CollectionDetails/GetByCode?Code="+ Code)
  }
  Order(CollectionCode:CollectionCodeViewModel) {
    return this.http.post<APIViewModel>("https://localhost:63000/Order/AddFromCollection", CollectionCode)
  }
}

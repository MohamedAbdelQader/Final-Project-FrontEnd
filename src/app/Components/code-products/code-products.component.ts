import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollectionCodeViewModel } from 'src/app/Models/CollectionCodeViewModel';
import { ProductData } from 'src/app/Models/productViewModel';
import { CollectionService } from 'src/app/service/collection.service';

@Component({
  selector: 'app-code-products',
  templateUrl: './code-products.component.html',
  styleUrls: ['./code-products.component.css'],
})
export class CodeProductsComponent implements OnInit {
  public productlist: ProductData[] = [];

  constructor(
    private collectionCode: CollectionService,
    private router: Router
  ) {}
  Code="";

  ngOnInit(): void {
  }
  Get() {

    this.collectionCode.GetCollectionByCode(this.Code).subscribe((res) => {
      console.log(res);
      if (res.success == true) {
        this.productlist = res.data as ProductData[];
      }
    });
  }
  order() {
    let CollectionCode = new CollectionCodeViewModel();
    CollectionCode.CollectionCode = this.Code;
    CollectionCode.UserId = localStorage.getItem('id') ?? '';
    console.log(CollectionCode)
    this.collectionCode.Order(CollectionCode).subscribe(res=>{
      console.log(res)
      if(res.success == true){
        this.router.navigate(["user/order",res.data])
      }
      else{
        alert("try Again !!!")
      }
    });
  }
}

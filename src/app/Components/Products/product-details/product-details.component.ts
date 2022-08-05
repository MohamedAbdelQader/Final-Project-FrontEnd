import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cartEditViewModel } from 'src/app/Models/cart';
import { ProductData } from 'src/app/Models/productViewModel';
import { CartService } from 'src/app/service/cart.service';
import { ProductServices } from 'src/app/service/ProductServices';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public productlist: any;
  id: any;
  productdetails: ProductData = new ProductData;
  searchtext: string = "";
  constructor(private route: ActivatedRoute, private Productserv: ProductServices, private cartservice: CartService) {
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getProductById();
  }
  getProductById() {
    this.Productserv.getProductById(this.id).subscribe(res => {
      console.log(res)
      this.productdetails = res.data;
    })
  }
  Onsearchtextchange(searchValue: string) {
    this.searchtext = searchValue;
    console.log(this.searchtext)
  }
  addtocart(item: ProductData) {
    if (localStorage.getItem("id") == null) {
      alert("Dear Client you must be sign in")
    }
    else {
      console.log(item);
      let val = new cartEditViewModel();
      val.ProductID = item.id;
      val.UserID = localStorage.getItem("id") ?? ""
      this.cartservice.addtocart(val).subscribe(res => {
        console.log(res)
      });
      window.location.reload();
    }
  }
}




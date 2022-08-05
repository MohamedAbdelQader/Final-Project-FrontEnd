import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cartEditViewModel, cartViewModel } from 'src/app/Models/cart';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products: cartViewModel[] = []

  loading: boolean = true;
  orderDone: boolean = false;
  public id: string = localStorage.getItem('id') ?? "";
  constructor(private cartservice: CartService, private orderservice: OrderService, private router: Router) { }

  ngOnInit(): void {

    this.cartservice.getProducts().subscribe
    (res=>{
      //console.log(res)
      this.products=res.data as cartViewModel[];
      //this.grandTotal=this.cartservice.getTotalPrice();
      console.log(this.products);
    })
    

  }
  removeitem(id: number) {
    this.loading = true;
    this.cartservice.removeCartItem(id).subscribe(res => {
      if (res.success == true) {
        // alert("sign up success");
        window.location.reload()
      }
      else {
        alert("Try Again!!!")
      }
    });

  }
  emptycart() {
    this.cartservice.removeAllCart();
  }
  order() {

    this.orderservice.order(this.id).subscribe(res => {
      console.log(res);
      if(res.success == true){
        this.orderDone = true;
        // window.location.reload()
        this.router.navigate(["user/order",res.data])
      }
      else{
        alert("try Again !!!")
      }
    })
  }
  toggle(){
    this.orderDone = false
  }
  decreaseValue(Input: number, id: number, pID: number) {
    let val = new cartEditViewModel()
    val.ID = id;
    val.ProductID = pID;
    val.Quantity = --Input;
    val.UserID = localStorage.getItem("id") ?? ""

    console.log(val)
    this.cartservice.updatequantity(val).subscribe(res => {
      console.log(res)
      if (res.success == true) {
        window.location.reload()
      }
      else {
        alert(res.message)
      }
    })

  }

  increaseValue(Input: number, id: number, pID: number) {
    let val = new cartEditViewModel()
    val.ID = id;
    val.ProductID = pID;
    val.Quantity = ++Input;
    val.UserID = localStorage.getItem("id") ?? ""

    this.cartservice.updatequantity(val).subscribe(res => {
      console.log(res)
      if (res.success == true) {
        window.location.reload()
      }
      else {
        alert(res.message)
      }
    })

  }
  grandTotal(): number {
    let total = 0;
    for (let index = 0; index < this.products.length; index++) {
      total += this.products[index].price * this.products[index].quantity;

    }
    return total;
  }
}

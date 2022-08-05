import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-ordersenirio',
  templateUrl: './ordersenirio.component.html',
  styleUrls: ['./ordersenirio.component.css']
})
export class OrdersenirioComponent implements OnInit {
  public products:any=[];
  constructor(private orderservice : OrderService) { }

  ngOnInit(): void {
  }
   
  orderdetails(orderid :string)
  {
     this.orderservice.orderdetails(orderid)
  }
}

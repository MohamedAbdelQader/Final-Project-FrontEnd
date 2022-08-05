import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetails } from 'src/app/Models/OrderDetails';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private Order:OrderService,private active:ActivatedRoute) { }
  orderid:number=0;
  details:OrderDetails[]=[]
  ngOnInit(): void {
    this.orderid = this.active.snapshot.params['id'];
    this.Order.Getorder(this.orderid).subscribe(
      res=>{
        console.log(res)
        this.details = res.data as OrderDetails[]
      }
    )
  }

}

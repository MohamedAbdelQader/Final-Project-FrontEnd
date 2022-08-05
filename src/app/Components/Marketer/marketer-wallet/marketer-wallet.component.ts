import { Component, OnInit } from '@angular/core';
import { Wallet } from '../../../Models/Wallet';
import { MarketerService } from '../../../service/marketer.service';
@Component({
  selector: 'app-marketer-wallet',
  templateUrl: './marketer-wallet.component.html',
  styleUrls: ['./marketer-wallet.component.css']
})
export class MarketerWalletComponent implements OnInit {
tasks:Wallet=new Wallet;
  constructor(private marketerWallet:MarketerService) { }

  ngOnInit(): void {
    this.marketerWallet.marketerWallet().subscribe(res=>{this.tasks=res.data
      console.log(res)

    })
  }

}

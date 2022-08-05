import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/Account.service';
import { AuthService } from 'src/app/service/Auth.service';
import { CartService } from 'src/app/service/cart.service';
import { faviourtService } from 'src/app/service/faviourt.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public totalItemfav: number = 0;
  public totalItemcar: number = 0;

  public id: string = localStorage.getItem('id') ?? "";
  constructor(private cartservice: CartService, private faviourtservice: faviourtService,
    private accountservice: AccountService,private auth :AuthService, private router:Router) { }

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe
      (res => {
        this.totalItemcar = res.data.length;


      })

    this.faviourtservice.getProducts(this.id).subscribe(res => {
      this.totalItemfav = res.data.length;
    })
  }


  logout() {
    this.accountservice.logout().subscribe(res => {
      console.log(res)
      localStorage.removeItem('Token');
      localStorage.removeItem('username');
      localStorage.removeItem('role');
      localStorage.removeItem("id");

      this.auth.setLooggedStatus(false)
      this.router.navigateByUrl('/login')
    });
  }


}



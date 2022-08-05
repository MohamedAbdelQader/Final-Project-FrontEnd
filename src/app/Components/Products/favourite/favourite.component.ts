import { Component, OnInit } from '@angular/core';
import { faviourtService } from 'src/app/service/faviourt.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  public products:any=[];
  public id : string=localStorage.getItem('id')??"";
    constructor(private faviourtService:faviourtService ) { }
  
    ngOnInit(): void {
      
      this.faviourtService.getProducts(this.id).subscribe(res=>{
       this.products=res.data;
       console.log(res)
             
      // })
    })
  }
 
    removeitem(id:number){
      this.faviourtService.removeAllCart(id).subscribe(res=>{
        console.log(res)
        window.location.reload()
      });
    }
    }


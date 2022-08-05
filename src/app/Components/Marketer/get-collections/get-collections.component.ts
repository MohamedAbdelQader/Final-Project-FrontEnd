import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIViewModel } from 'src/app/Models/APIViewModel';
import { CollectionViewModel } from 'src/app/Models/CollectionViewModel';
import { CollectionService } from 'src/app/service/collection.service';
@Component({
  selector: 'app-get-collections',
  templateUrl: './get-collections.component.html',
  styleUrls: ['./get-collections.component.css']
})
export class GetCollectionsComponent implements OnInit {
  
  public  Collection: CollectionViewModel[] =[];
  constructor(private CollectionServices :CollectionService,private http:HttpClient) { }

  ngOnInit(): void {
  

      //this. CollectionServices.getCollection().subscribe();
      
      
        // this.CollectionServices.getCollection().subscribe(result=>
        //   this.Collection = result.data as CollectionViewModel[] 
        //   )
          
    
  }
  // get(){
    
  //     this.CollectionServices.getCollection().subscribe(result=>
  //     {

  //      this. Collection=result.Data
  //     });
    
  //   return this.Collection;
  // }
  
  // getProductInCollection(Code:string){
  //   //let colProduct:CollectionProductEditViewModel=new CollectionProductEditViewModel();
  //   this.CollectionServices.getProductsInCollection(Code).subscribe();
  // }

}

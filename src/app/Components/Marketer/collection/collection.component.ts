
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionProductViewModel } from 'src/app/Models/CollectionProductViewModel';
import { CollectionViewModel } from 'src/app/Models/CollectionViewModel';
import { ProductData } from 'src/app/Models/productViewModel';
import { CollectionService } from 'src/app/service/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  
  CollectionId = 0
  loading: boolean = false;
 CollectionProduct:CollectionProductViewModel[]=[];
  constructor(private CollectionServices :CollectionService ,private router:Router ,private Activate:ActivatedRoute) { }

  ngOnInit(): void {
    this.CollectionId =  this.Activate.snapshot.params["id"];
    this.CollectionServices.getProductsBycollectionID(this.CollectionId).subscribe(res=>{
      console.log(res.data)
      this.CollectionProduct=res.data as CollectionProductViewModel[]
    })
  }
  back(){

  }
}

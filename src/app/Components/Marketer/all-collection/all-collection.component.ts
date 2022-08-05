import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionEditViewModel, CollectionViewModel } from '../../../Models/CollectionViewModel';
import { CollectionService } from '../../../service/collection.service';

@Component({
  selector: 'app-all-collection',
  templateUrl: './all-collection.component.html',
  styleUrls: ['./all-collection.component.css']
})
export class AllCollectionComponent implements OnInit {
  list:CollectionViewModel[]=[];
  constructor(private collectionServ:CollectionService, private Router :Router) { }

  ngOnInit(): void {
    this.collectionServ.getCollections().subscribe(res=>{
      console.log(res);
      this.list = res.data as CollectionViewModel[]
    })
  }
  remove(id:number, nameEN:string,nameAr:string){
    let rem = new CollectionEditViewModel();
    rem.MarketerID = localStorage.getItem("id")
    rem.NameEN = nameEN
    rem.NameAr = nameAr
    rem.id = id

    this.collectionServ.removeCollection(rem).subscribe(
      res=> {
        if(res.success == true){
          window.location.reload();
        }
        else{
          alert("try Again!!!!")
        }
      }
    )
  }

}

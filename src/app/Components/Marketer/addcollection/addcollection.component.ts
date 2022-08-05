import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollectionService } from '../../../service/collection.service';
import { CollectionEditViewModel } from '../../../Models/CollectionViewModel';

@Component({
  selector: 'app-addcollection',
  templateUrl: './addcollection.component.html',
  styleUrls: ['./addcollection.component.css']
})
export class AddcollectionComponent implements OnInit {
 
  constructor(private builder:FormBuilder,private collection:CollectionService,private router:Router) { }
  form:FormGroup=new FormGroup([]);

  ngOnInit(): void {
    this.form=this.builder.group({
      nameEn:['',[Validators.required]],
      nameAr:['',[Validators.required]],
      
      
    })
  }
add(){
  let addCollection = new CollectionEditViewModel();
  addCollection.NameEN=this.form.value["nameEn"];
  addCollection.NameAr=this.form.value["nameAr"];
  addCollection.MarketerID=localStorage.getItem("id")
 
  console.log(addCollection);


this.collection.addCollection(addCollection).subscribe(res=>{

  console.log(res)
  if (res.success == true){
    console.log(res)
    this.router.navigate(['/marketer/collectionproducts/',res.data.id])
  }
  else{
    console.log(res)
    alert("Try again please")
  }
})

  
}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionProductViewModel } from 'src/app/Models/CollectionProductViewModel';
import { CollectionViewModel } from 'src/app/Models/CollectionViewModel';
import { ProductData } from 'src/app/Models/productViewModel';
import { CollectionService } from 'src/app/service/collection.service';
import { ProductServices } from 'src/app/service/ProductServices'; 

@Component({
  selector: 'app-collection-products',
  templateUrl: './collection-products.component.html',
  styleUrls: ['./collection-products.component.css'],
})
export class CollectionProductsComponent implements OnInit {
  page: number = 1; //current page number
  count: number = 1; //total pages
  //number of elements to get form database per request
  tableSize: number = 6;
  collectionProducts: CollectionProductViewModel[] = [];
  CollectionId: number = 0;
  Collection :CollectionViewModel = new CollectionViewModel()
  productlist: ProductData[] = [];
  loading: boolean = false;

  // searchtext :string ="";
  constructor(
    private productservice: ProductServices,
    private collectionServ:CollectionService,
    private activate: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.CollectionId = this.activate.snapshot.params['id'] as number;
    console.log(this.CollectionId);
    this.getCollection();
    this.getproduct();
  }
  check(id: number,name:string, e: any) {
    if(e.target.checked ==true){
      let val = new CollectionProductViewModel;
      val.CollectionID = this.CollectionId;
      val.ProductID = id;
      val.ProductName = name;
      this.collectionProducts.push(val)
    }
    else{
      let ind = this.collectionProducts.findIndex(p=>p.ProductID == id)
      this.collectionProducts.splice(ind,1);
    }
    console.log(this.collectionProducts)
  }
  getCollection() {
    this.collectionServ.getcollectionbyID(this.CollectionId).subscribe(
      res=>{
        this.Collection = res.data as CollectionViewModel;
      }
    )
  }
  onTableDataChange(event: any) {
    console.log(event);
    this.page = event;
    this.getproduct();
  }
  getproduct() {
    this.loading = true;
    this.productservice.GetProduct(this.page, this.tableSize).subscribe(
      (res) => {
        console.log(res);
        this.productlist = res.data.data as ProductData[];
        this.page = res.data.pageIndex;
        this.tableSize = res.data.pageSize;
        this.count = res.data.count;
        this.loading = false;
      }
    );
  }
  Done(){
    this.collectionServ.addCollectionProducts(this.collectionProducts).subscribe(
      res=>{
        if(res.success == true){
         this.router.navigateByUrl("/marketer/allCollection")

        }
        else{
          alert("Error \n Try again")
        }
        console.log(res)
      }

    )
  }
}

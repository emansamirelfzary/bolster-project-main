import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

constructor(private _productService:ProductsService, private _activatedRoute:ActivatedRoute){}

allProducts:Product[]=[]
searchKey: string="";
searchResult: Product[]=[];

ngOnInit() {
  this._activatedRoute.queryParams.subscribe(params => {
    this.searchKey = params['term'];
    console.log(this.searchKey)
      this._productService.getProducts().subscribe({
        next:(response)=>{
this.allProducts=response.data

  this.searchResult = this.allProducts.filter(product =>
product.title.toLowerCase().includes(this.searchKey.toLowerCase()));
this.allProducts=this.searchResult

      console.log(this.searchResult)
        }});

    }
  );

}

}

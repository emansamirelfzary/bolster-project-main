import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from './../../interfaces/product';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
productId:string='';
productDetails:Product= {} as Product

  constructor(private _activatedRoute:ActivatedRoute, private _productService:ProductsService){

  }

  ngOnInit(): void {
      this._activatedRoute.paramMap.subscribe({
      next:(response:any)=>{
        this.productId= response.params.id
      }
    })

    this._productService.getProductDetails(this.productId).subscribe({
      next:(response)=>{
        this.productDetails= response.data
        console.log(this.productDetails)
      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },

    },
    nav: true
  }


}

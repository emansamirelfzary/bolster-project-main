import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { category } from 'src/app/products/interfaces/product';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit{

  allCategories:category[]=[]

  constructor(private _categoriesService:CategoriesService){}

  ngOnInit(): void {
    
    this._categoriesService.getCategories().subscribe({
      next:(response)=>{
        this.allCategories=response.data
        console.log(this.allCategories)
      }
    })


  }

}

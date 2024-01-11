import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './components/categories/categories.component';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CategoriesComponent,
    AllCategoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CategoriesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PageTitleComponent } from './components/page-title/page-title.component';




@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule

  ],
  exports:[
    NavBarComponent,
    FooterComponent,
    PageTitleComponent
  ]
})
export class SharedModule { }

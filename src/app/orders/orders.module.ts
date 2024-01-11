import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './components/order/order.component';



@NgModule({
  declarations: [
    CheckoutFormComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }

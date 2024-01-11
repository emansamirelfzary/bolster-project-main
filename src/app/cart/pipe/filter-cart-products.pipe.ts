import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCartProducts'
})
export class FilterCartProductsPipe implements PipeTransform {

  transform(products:any[]): any[] {
    return products.filter((ele)=>ele.count>0)
  }

}

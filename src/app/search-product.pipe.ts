import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: any, term?: any): any {

    if( term === undefined) { return products; }

    term = term.toLowerCase();

    return products.filter(function(product){
        return product.item.toLowerCase().includes(term.toLowerCase());
    });
}

}

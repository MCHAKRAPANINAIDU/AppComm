import { Component,  Output, OnInit } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ItemsService } from '../../services/items.service';
import { DataObj } from '../../data-obj';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { FormBuilder, FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from 'events';
import { SearchProductPipe } from '../../search-product.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = 'test';
  items;
  prodObj: DataObj;
  prodName: string;
  prodPluUpc: string;
  prodPrice: number;
  proId: number;
  proDesc: string;
  proTime: string;
  public search:any = '';
  locked: any[] = [];
  public show: boolean = false;
  prodReview;
  @Output() addProdObjToAppComp = new EventEmitter();
  constructor(private itemsList: ItemsService) {
    this.items = this.itemsList.getItems();
}
  ngOnInit() { }
  selectChangeHandler(event: any) {
    this.prodPluUpc = event.target.value;
  }
  addObjToList(  name: string, price: number, id: number, time: number) {
    if (this.prodPluUpc) {
      this.prodPluUpc = this.prodPluUpc;
    } else {
       this.prodPluUpc = 'appetizer';
      }
    this.prodObj = {
      productSize: '',
      item: name,
      plu_upc: this.prodPluUpc,
      price: '$' + price,
      productId: id + '',
      prodDesc: this.proDesc,
      prodReviews: ['good', 'aswesome', 'nice'],
      uom: 'Time Needs:' + time + 'Mins',
      img_url: '../assets/img/recpie_1.webp'
    };
    this.itemsList.addProdObject(this.prodObj);
    console.log(this.prodObj);
    console.log(this.items.length);
  }
  toggle() {
    this.show = !this.show;
  }
}

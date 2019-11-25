import { Component, OnInit } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ItemsService } from '../../services/items.service';
import { DataObj } from '../../data-obj';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title = 'test';
  items;
  constructor(private itemsList: ItemsService){
    this.items = this.itemsList.getItems();
  }

  ngOnInit() {
  }

}

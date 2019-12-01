import { Component,  Output, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { DataObj } from '../../data-obj';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from 'events';
import { SearchProductPipe } from '../../search-product.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'test';
  items;
  prodId : string;
  public search:any = '';
  locked: any[] = [];
  @Output() dataToAppComp = new EventEmitter();
  constructor(private itemsList: ItemsService){
    this.items = this.itemsList.getItems();
  }

  ngOnInit() {
    this.itemsList.currentMessage.subscribe(prodId => this.prodId = prodId);
  }
  onClickMe(value: string) {
    this.dataToAppComp.emit(value);
    this.itemsList.changeMessage(value);
    console.log(value);
  }
}

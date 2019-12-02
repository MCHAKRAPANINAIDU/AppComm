import { Component,  Output, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { DataObj } from '../../data-obj';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from 'events';
import { Observable, of } from 'rxjs'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   prodId : string;
   dataProds: Object;
   dataProd: Object;
   items;
   jsonData;
   prodDetails;
   public show: boolean = false;
   prodReview;
   public producIdVal: string;
   constructor(private itemsList: ItemsService, private route: ActivatedRoute){
     this.items = this.itemsList.getItems();
     this.route.params.subscribe( params => this.prodDetails = params.id);
     this.dataProd = this.items; 
   }
   ngOnInit() {
     this.itemsList.currentMessage.subscribe(prodId => this.prodId = prodId);
     this.dataProds = this.items[this.items.map(function (item) { return item.productId; }).indexOf(this.prodId)];
    this.jsonData = JSON.stringify(this.dataProds);
    this.prodReview = JSON.parse(this.jsonData).prodReviews;
  }   
  prodData(prodId){
      // this.dataProds = this.prodId;
      console.log(this.dataProds);
     }
  toggle() {
      this.show = !this.show;
  }
}

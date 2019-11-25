import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { DataObj } from '../../data-obj';
import { Observable, of } from 'rxjs'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
prodDetails: Object;
  constructor(private data: ItemsService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.prodDetails = params.id)
   }

  ngOnInit() {
    /*this.data.getItems(this.prodDetails).subscribe(
      data => this.prodDetails = data
    )*/
  }

}

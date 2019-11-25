import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { DataObj } from '../../data-obj';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'test';
  items;
  constructor(private itemsList: ItemsService){
    this.items = this.itemsList.getItems();
  }

  ngOnInit() {
  }

}

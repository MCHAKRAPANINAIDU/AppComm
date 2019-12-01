import { Component } from '@angular/core';
import { ItemsService } from './services/items.service';
import { DataObj } from './data-obj';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public dataAppComp: string;
  constructor(){}
  getChildDaata($event)  {
    this.dataAppComp = $event;
    console.log(this.dataAppComp);
  }
}

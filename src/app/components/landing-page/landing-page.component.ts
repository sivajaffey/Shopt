import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(public common:CommonService){}
  ngOnInit() {
    this.getProducts();
  }
  @Input() showFiller = false;
  products:product[] = [];
  getProducts() {
    let arr:any= this.common.getLocal('products');
    arr = (arr == null) ? [] : JSON.parse(arr);
    this.products=(arr.length >0) ? arr : [];
  }
}
interface product {
  title:string,
  description:string,
  instock:number
}
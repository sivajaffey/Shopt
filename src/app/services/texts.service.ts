import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextsService {

  constructor() { }
  config = {
    title: 'ShopT',
    footer: 'Fake Shop Version 1.0.0',
    errors : {
      productsuccess : "Product added successfully",
      producterror : "Add valid product",
      productstkerror: "Add stocks more than 0"
    }
  };
}

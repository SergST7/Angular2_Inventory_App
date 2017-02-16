import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import {
    Component
} from '@angular/core';


// Provides a `Product` object
class Product {

  constructor(
    public sku: string,
    public name: string,
    public umageUrl: string,
    public department: string[],
    public price: number
  ){}
}

@Component({
  selector: "inventory-app",
  template: `
  <div class="inventory-app">
    <h1>{{ product.name }}</h1>
    <span>{{ product.sku }}</span>
  </div>
`

})
class InventoryApp {
  // Inventory logic here
  products: Product[];

  constructor(){
    this.products =[
        new Product(
          'NICEHAT',
          'A Nice Black Hat',
          '/resources/images/products/black-hat.jpg',
          ['Men', 'Accessories', 'Hats'],
          29.99),
        new Product(
          'NEATOJACKET',
          'Blue Jacket',
          '/resources/images/products/blue-jacket.jpg',
          ['Women', 'Apparel', 'Jackets & Vests'],
          238.99),
        new Product(
          'NEATOJACKET',
          'Blue Jacket',
          '/resources/images/products/blue-jacket.jpg',
          ['Women', 'Apparel', 'Jackets & Vests'],
          238.99)
    ]
  }
}


// module boot
@NgModule({
  declarations: [
    InventoryApp
  ],
  imports: [ BrowserModule ],
  bootstrap: [ InventoryApp ]
})
class InventoryAppModule {}

platformBrowserDynamic().bootstrapModule(InventoryAppModule);
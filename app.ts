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
    (Products will go here soon)
  </div>
`

})
class InventoryApp {
  // Inventory logic here
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
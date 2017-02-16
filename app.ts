import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import {
    Component,
} from '@angular/core';

@Component({

})
class InventoryApp {
  // Inventory logic here
}


@NgModule({
  declarations: [
    InventoryApp
  ],
  imports: [ BrowserModule ],
  bootstrap: [ InventoryApp ]
})
class InventoryAppModule {}

platformBrowserDynamic().bootstrapModule(InventoryAppModule);
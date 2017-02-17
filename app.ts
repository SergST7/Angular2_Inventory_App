import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import {
    Component,
    EventEmitter
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


/**
  * @ProductsList: A component for rendering all ProductRows and
  * storing the currently selected Product
 */
@Component({
  selector: 'product-list',
  inputs: ['listOfProduct'],
  outputs: ['onProductSelected'],
  template:`
    <div class="ui items">
      <product-row
        *ngFor="let productItem of listOfProduct"
        [prod]="productItem"
        (click)="clicked(productItem)"
        [class.selected]="isSelected(productItem)">      
        
      </product-row>
    </div>
  `
})
class ProductList{
  /**
   * @input listOfProduct - the Product[] passed to us
   */
  listOfProduct: Product[];

  /**
   * @ouput onProductSelected - outputs the current
   * Product whenever a new Product is selected
   */
  onProductSelected: EventEmitter<Product>;

  /**
    * @property currentProduct - local state containing
    * the currently selected `Product`
   */
  currentProduct: Product;

  constructor(){
    this.onProductSelected = new EventEmitter()
  };

  clickked(product: Product): void{
    this.currentProduct = product;
    console.log(product);
    this.onProductSelected.emit(product)
  }

  isSelected(product: Product): boolean{
    if (!product || !this.currentProduct){
      return false
    }
    return product.sku === this.currentProduct.sku
  }

}

@Component({
  selector: "inventory-app",
  template: `
  <div class="inventory-app">
    <product-list 
    [listOfProduct]="products"
    (onProductSelected)="wasSelectProduct($events)">
    </product-list>   
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

  wasSelectProduct (product: Product):void {
    console.log("Product selected is: ", product);
  }
}


// module boot
@NgModule({
  declarations: [
    InventoryApp,
    ProductList
  ],
  imports: [ BrowserModule ],
  bootstrap: [ InventoryApp ]
})
class InventoryAppModule {}

platformBrowserDynamic().bootstrapModule(InventoryAppModule);
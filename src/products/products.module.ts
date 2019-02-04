import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-products',
  template: `Hello {{name}}`
})
export class ProductsComponent  {
  name = 'Products';
}


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ ProductsComponent ],
  bootstrap:    [ ProductsComponent ]
})
export class ProductsModule { }

import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { ProductService, Product } from './services/product';
import { ProductList } from './components/product-list/product-list';
import { ProductsFormComponent } from './components/products-form/products-form';
import { ProductFilterComponent } from './components/product-filter/product-filter';

@Component({
  selector: 'app-root',
  imports: [ProductList, ProductsFormComponent, ProductFilterComponent, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('gestion-productos');

  constructor(private productService: ProductService) {
    //this.productService.cargarProductos().subscribe(datos => {
    //  console.log('Productos cargados:', datos);
    //});
    this.productService.cargarProductos();

  }

  onProductoCreado(producto: any) {
    this.productService.agregarProducto(producto);
  }

}

//imports: [RouterOutlet]
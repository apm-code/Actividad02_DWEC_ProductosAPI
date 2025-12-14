import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { ProductService, Product } from './services/product';
import { ProductList } from './components/product-list/product-list';
import { ProductsFormComponent } from './components/products-form/products-form';

@Component({
  selector: 'app-root',
  imports: [ProductList, ProductsFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('gestion-productos');

  constructor (private productService: ProductService){
    this.productService.cargarProductos().subscribe(
      (datos : Product[]) => console.log('Productos cargados de la API: ',datos)
    )
  }

  onProductoCreado(producto: any){
    console.log('Producto recibido: ', producto)
  }

}

//imports: [RouterOutlet]
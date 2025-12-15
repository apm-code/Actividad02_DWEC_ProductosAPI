import { Component, Input } from '@angular/core';
import { Product } from '../../services/product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-products-card',
  imports: [CommonModule],
  templateUrl: './products-card.html',
  styleUrl: './products-card.css',
})

export class ProductsCard {
  @Input() product!: Product;

  constructor(private productService: ProductService) { }

  eliminar() {
    this.productService.eliminarProducto(this.product._id);
  }
}


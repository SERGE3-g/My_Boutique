import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe,
    NgForOf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products: any[] = [];
  private cartService: CartService = new CartService();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
  }

  getCartItems() {
    return this.cartService.getCartItems();
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  clearCart() {
    this.cartService.clearCart();
  }

}

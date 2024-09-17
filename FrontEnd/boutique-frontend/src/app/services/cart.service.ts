import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  addToCart(product: any) {
    this.cartItems.push(product);
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotal() {
    return this.cartItems.reduce((total, item) => total + item.prezzo, 0);
  }

  removeFromCart(product: any) {
    this.cartItems = this.cartItems.filter(item => item !== product);

  }

  clearCart() {
    this.cartItems = [];
  }
}


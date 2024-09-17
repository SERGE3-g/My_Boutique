import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink,
    NgForOf
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(protected cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }
}

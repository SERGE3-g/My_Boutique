import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  cartItemCount: number = 0;

  constructor(private authService: AuthService, private cartService: CartService) {}

  ngOnInit(): void {
    // Aggiorna il conteggio del carrello
    this.cartItemCount = this.cartService.getCartItems().length;
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}

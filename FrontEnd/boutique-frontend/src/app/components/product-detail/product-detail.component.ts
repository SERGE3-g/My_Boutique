import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe((data: any) => {
      this.product = data;
    });
  }

  addToCart(product: any) {

  }
}

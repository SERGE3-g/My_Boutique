// Autore: Serge Guea

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/prodotti';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProductById(id: string | null) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addProduct(product: any) {
    return this.http.post<any>(this.apiUrl, product);
  }

  updateProduct(product: any) {
    return this.http.put<any>(`${this.apiUrl}/${product.id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-products',
  imports: [CommonModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css',
})
export class CategoryProductsComponent {
  productList: any[] = [];
  activeCategoryId: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private productSrv: ProductService  ) {
    this.activatedRoute.params.subscribe((res: any) => {
      this.activeCategoryId = res['id'];
      this.loadProductsByCategory();
    });
  }

  loadProductsByCategory() {
    this.productSrv.getAllProductsByCategory(this.activeCategoryId).subscribe((response: any) => {
      this.productList = response.data;
    });
  }
}

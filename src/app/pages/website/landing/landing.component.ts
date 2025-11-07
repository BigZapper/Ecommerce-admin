import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-landing',
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  productList: any[] = [];
  categories: any[] = [];

  constructor(private productSrv: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
  }

  navigateToCategory(categoryId: number) {
    this.router.navigate(['/category', categoryId]);
  }

  getAllCategories() {
    this.productSrv.getAllCategory().subscribe((response: any) => {
      this.categories = response.data;
    });
  }

  getAllProducts() {
    this.productSrv.getProducts().subscribe((response: any) => {
      this.productList = response.data;
    });
  }
}

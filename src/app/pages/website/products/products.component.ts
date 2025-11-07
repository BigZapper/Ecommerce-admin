import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { FilterComponent, ProductFilter } from '../../../components/filter/filter.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FilterComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: any[] = [];
  allProducts: any[] = [];
  categories: any[] = [];

  constructor(private productSrv: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllCategories() {
    this.productSrv.getAllCategory().subscribe((response: any) => {
      this.categories = response.data || [];
    });
  }

  getAllProducts() {
    this.productSrv.getProducts().subscribe((response: any) => {
      this.allProducts = response.data || [];
      this.productList = [...this.allProducts];
    });
  }

  onFilter(filter: ProductFilter) { 
    let list = [...this.allProducts];

    if (filter) {
      const cat = filter.categoryName;
      const hasCategory =
        cat !== undefined && cat !== null && cat !== '' && cat !== '0';
      if (hasCategory) {
        list = list.filter((p) => p.categoryName === cat);
      }
      if (filter.search) {
        const q = filter.search.toString().toLowerCase();
        list = list.filter((p) =>
          (p.productShortName || '').toString().toLowerCase().includes(q)
        );
      }
      if (filter.minPrice != null) {
        list = list.filter((p) => Number(p.productPrice) >= Number(filter.minPrice));
      }
      if (filter.maxPrice != null) {
        list = list.filter((p) => Number(p.productPrice) <= Number(filter.maxPrice));
      }
      if (filter.sort === 'asc') {
        list.sort((a, b) => Number(a.productPrice) - Number(b.productPrice));
      } else if (filter.sort === 'desc') {
        list.sort((a, b) => Number(b.productPrice) - Number(a.productPrice));
      }
    }

    this.productList = list;
  }
}

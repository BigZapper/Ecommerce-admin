import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  // categories$: Observable<any[]>;
  constructor(private productSrv: ProductService) {
    // this.categories$ = this.productSrv
    //   .getAllCategory()
    //   .pipe(map((response: any) => response.data));
  }
  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.productSrv
      .getAllCategory()
      .pipe(map((response: any) => response.data))
      .subscribe((data: any[]) => {
        this.categories = data;
      });
  }
}

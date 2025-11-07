import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  isSidePanelVisible: boolean = false;
  defaultProductObj: any = {
    productId: 0,
    productName: '',
    productSku: '',
    productPrice: 0,
    productShortName: '',
    productDescription: '',
    productImageUrl: '',
    createdDate: new Date(),
    deliveryTimeSpan: '',
    categoryId: 0,
  };
  productObj = this.defaultProductObj;

  categoryList: any[] = [];
  productList: any[] = [];

  constructor(private productSrv: ProductService) {}

  ngOnInit() {
    this.getAllCategories();
    this.getProducts();
  }

  getProducts() {
    this.productSrv.getProducts().subscribe((response: any) => {
      this.productList = response.data;
    });
  }

  getAllCategories() {
    this.productSrv.getAllCategory().subscribe((response: any) => {
      this.categoryList = response.data;
    });
  }

  onUpdate() {
    this.productSrv
      .updateProduct(this.productObj)
      .subscribe((response: any) => {
        if (response.result) {
          alert('Product update successfully');
          this.getProducts();
        } else {
          alert(response.message);
        }
        this.closeSidePanel();
      });
  }
  onSave() {
    this.productSrv.saveProduct(this.productObj).subscribe((response: any) => {
      if (response.result) {
        alert('Product saved successfully');
        this.getProducts();
      } else {
        alert(response.message);
      }
      this.closeSidePanel();
    });
  }

  onEditButtonClick(item: any) {
    this.productObj = item;
    this.openSidePanel();
  }

  onDelete(item: any) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this product?'
    );
    if (confirmDelete) {
      this.productSrv
        .deleteProduct(item.productId)
        .subscribe((response: any) => {
          if (response.result) {
            alert('Product deleted successfully');
            this.getProducts();
          } else {
            alert(response.message);
          }
        });
    }
  }

  onClickNewButton() {
    this.productObj = this.defaultProductObj;
    this.openSidePanel();
  }
  openSidePanel() {
    this.isSidePanelVisible = true;
  }
  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}

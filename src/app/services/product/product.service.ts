import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllCategory() {
    return this.http.get(
      Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORIES
    );
  }

  getProducts() {
    return this.http.get(
      Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCTS
    );
  }
  getAllProductsByCategory(id: number) {
    return this.http.get(
      Constant.API_END_POINT +
        Constant.METHODS.GET_ALL_PRODUCTS_BY_CATEGORY +
        id
    );
  }

  saveProduct(productObj: any) {
    return this.http.post(
      Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT,
      productObj
    );
  }
  updateProduct(productObj: any) {
    return this.http.post(
      Constant.API_END_POINT + Constant.METHODS.UPDATE_PRODUCT,
      productObj
    );
  }
  deleteProduct(id: any) {
    return this.http.get(
      Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT + id
    );
  }
}

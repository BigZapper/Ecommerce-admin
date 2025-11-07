import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductsComponent } from './pages/admin/products/products.component';
import { ProductsComponent as ProductsComponentPage } from './pages/website/products/products.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'shop',
        component: ProductsComponentPage,
      },
      {
        path: 'category/:id',
        component: CategoryProductsComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'admin-products', pathMatch: 'full' },
      {
        path: 'admin-products',
        component: ProductsComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
    ],
  },
];

import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { ProductsComponent as ProductsComponentPage } from './pages/website/products/products.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';

export const routes: Routes = [
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'shop', component: ProductsComponentPage },
      { path: 'category/:id', component: CategoryProductsComponent },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
];

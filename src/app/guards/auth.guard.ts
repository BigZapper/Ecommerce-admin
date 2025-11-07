import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const isLogged = localStorage.getItem('isLoggedIn') === 'true';
    if (isLogged) return true;
    return this.router.parseUrl('/login');
  }
}
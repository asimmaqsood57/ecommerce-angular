import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { SellerService } from './services/seller.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private SellerService: SellerService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> {
    const seller = localStorage.getItem('seller');
    if (seller) {
      return true;
    }

    return this.SellerService.isSellerLoggedIn.value;
  }
}

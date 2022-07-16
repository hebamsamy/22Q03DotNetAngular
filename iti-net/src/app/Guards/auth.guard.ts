import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AccountServices } from '../Services/Account';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private Account: AccountServices, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(route, state);
    if (this.Account.IsLoggedIn()) return true;
    else {
      let path = route.routeConfig?.path;
      this.router.navigate(['login', path]);
      return false;
    }
  }
}

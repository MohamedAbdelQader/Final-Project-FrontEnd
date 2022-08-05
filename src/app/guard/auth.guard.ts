import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../service/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private Account: AuthService, private router: Router) {}
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean {
      console.log(route, state);
      if (this.Account.IsLoggedIn()) return true;
      else {
        alert("Sign in Please ")
        let path = route.routeConfig?.path;
        this.router.navigate(['intro']);
        return false;
      }
    }  
}

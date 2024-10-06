import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EcomStateService } from 'src/services/ecom-state.service';

@Injectable({
  providedIn: 'root',
})
export class NewUserGuard implements CanActivate {
  service = inject(EcomStateService);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!!this.service.newUserMail$.value) {
      return true;
    }
    return false;
  }
}

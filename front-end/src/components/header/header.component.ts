import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EcomStateService } from 'src/services/ecom-state.service';
import { clearNewUserFormAction } from 'src/store/app.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public router: Router,
    public ecomStateService: EcomStateService,
    public store: Store<{ selector: any }>
  ) {}

  userLogin() {
    this.router.navigate(['/']);
  }

  signOut() {
    this.ecomStateService.userDetailForm$.next(null);
    this.store.dispatch(clearNewUserFormAction());
    this.ecomStateService.showSignoutText$.next(false);
    this.ecomStateService.userStatus$.next(false);
  }
}

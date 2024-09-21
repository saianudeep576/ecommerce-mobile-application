import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EcomStateService } from 'src/services/ecom-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public router: Router,
    public ecomStateService: EcomStateService
  ) {}

  userLogin() {
    this.router.navigate(['/']);
  }

  signOut() {
    this.ecomStateService.userDetailForm$.next(null);
    this.ecomStateService.newUserRegistrationForm$.next(null);
    this.ecomStateService.showSignoutText$.next(false);
    this.ecomStateService.userStatus$.next(false);
  }
}

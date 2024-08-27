import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EcomStateService } from 'src/services/ecom-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    public router: Router,
    public ecomStateService: EcomStateService
  ) {}

  userLogin() {
    this.router.navigate(['/']);
  }
}

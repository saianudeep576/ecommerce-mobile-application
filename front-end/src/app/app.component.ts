import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EcomStateService } from 'src/services/ecom-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front-end';
  imageUrlInfo = [
    {
      title: 'IPhone-16 Black',
      url: 'https://th.bing.com/th?id=OIF.z0G04oqJ4xm6Y4%2bRP7mesA&rs=1&pid=ImgDetMain',
      alt: 'Iphone-16',
      storage: '128GB',
      ram: '12GB',
      color: 'Black',
    },
    {
      title: 'IPhone-16 Blue',
      url: 'https://www.canstarblue.com.au/wp-content/uploads/2024/09/blue-iphone-16-plus.png',
      alt: 'Iphone-16',
      storage: '128GB',
      ram: '12GB',
      color: 'Blue',
    },
    {
      title: 'IPhone 16 Pro Blue',
      url: 'https://www.canstarblue.com.au/wp-content/uploads/2024/09/blue-iphone-16-plus.png',
      alt: 'IPhone 16 Pro Blue',
      storage: '128GB',
      ram: '12GB',
      color: 'Blue',
    },
    {
      title: 'IPhone 16 Pro Gold',
      url: 'https://www.fonezone.ae/cdn/shop/products/MwQCadyakv.jpg?v=1697640231&width=1946',
      alt: 'IPhone 16 Pro Gold',
      storage: '128GB',
      ram: '12GB',
      color: 'Gold',
    },
    {
      title: 'Realme P2 pro Black',
      url: 'https://th.bing.com/th?id=OIF.aKhRV4Hpcwq%2bCQ%2bGfr0%2faw&rs=1&pid=ImgDetMain',
      alt: 'Realme P2 pro Black',
      storage: '128GB',
      ram: '12GB',
      color: 'Black',
    },
    {
      title: 'Realme P2 pro Blue',
      url: 'https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/r/e/realme_2_pro_2.png',
      alt: 'Realme P2 pro Blue',
      storage: '128GB',
      ram: '12GB',
      color: 'Blue',
    },
  ];
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

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EcomStateService } from 'src/services/ecom-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  imageUrlObject = [
    {
      url: 'https://th.bing.com/th/id/R.2649d67eed5e2a21c4e8ee73e606560a?rik=XJIhGduXPSsUTw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fSamsung-Logo-HD-Wallpapers.png&ehk=%2fArycQ76iC4XWEojxL%2fo5yghTD%2byAup8tVwVZ23byVM%3d&risl=&pid=ImgRaw&r=0',
      alt: 'Samsung',
    },
    {
      url: 'https://1.bp.blogspot.com/-IHIprxC2Za0/UBg14NttLLI/AAAAAAAAA28/nyBH-GeEX7Y/s1600/white-apple-logo-wallpaper.jpg',
      alt: 'Apple',
      height: '150%',
    },
    {
      url: 'https://th.bing.com/th/id/OIP.qK3elWQ0g2l9Yext-uVYyQAAAA?rs=1&pid=ImgDetMain',
      alt: 'Oppo',
    },
    {
      url: 'https://th.bing.com/th/id/OIP.qK3elWQ0g2l9Yext-uVYyQAAAA?rs=1&pid=ImgDetMain',
      alt: 'Oppo',
    },
    {
      url: 'https://th.bing.com/th/id/OIP.qK3elWQ0g2l9Yext-uVYyQAAAA?rs=1&pid=ImgDetMain',
      alt: 'Oppo',
    },
  ];
  constructor(
    public router: Router,
    public ecomStateService: EcomStateService
  ) {}

  userLogin() {
    this.router.navigate(['/']);
  }

  naviagteToAboutUs() {
    this.router.navigate(['about-us']);
  }

  signOut() {
    this.ecomStateService.userDetailForm$.next(null);
    this.ecomStateService.newUserRegistrationForm$.next(null);
    this.ecomStateService.showSignoutText$.next(false);
    this.ecomStateService.userStatus$.next(false);
  }
}

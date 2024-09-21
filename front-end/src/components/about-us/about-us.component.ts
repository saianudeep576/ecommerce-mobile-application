import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  imageUrlInfo = [
    {
      title: 'K.Chiranjeevi',
      url: 'https://th.bing.com/th/id/OIP.IYgHO2yV72cL2LKcrq8fJQHaHa?rs=1&pid=ImgDetMain',
      alt: 'Chiru',
      designation: 'CEO & Founder',
      email: 'k.chiru@swetha.com',
      education: 'MBA Stanford University',
    },
    {
      title: 'G.Mahesh Babu',
      url: 'https://imagevars.gulfnews.com/2020/01/26/TAB-Mahesh-Babu1-1580037946572_16fe199bccd_large.jpg',
      alt: 'Mahesh',
      designation: 'Managing Director',
      email: 'g.mahesh@swetha.com',
      education: 'MBA Oxford University',
    },
    {
      title: 'S.Sai Pallavi',
      url: 'https://www.tollywood.net/wp-content/uploads/2020/07/Powerful-Sai-Pallavi-too-chooses-OTT-path.jpg',
      alt: 'Pallavi',
      designation: 'Technical Consultant',
      email: 's.pallavi@swetha.com',
      education: 'M.Tech,IIT Bombay',
    },
    {
      title: 'Fahad Fasil',
      url: 'https://th.bing.com/th/id/OIP.XKjXZ7ASAiF9z9B5pYDM1wHaHa?w=736&h=736&rs=1&pid=ImgDetMain',
      alt: 'Fahad',
      designation: 'Financial Advisor',
      email: 'fafa@swetha.com',
      education: 'MBA, IIM Chennai',
    },
  ];
}

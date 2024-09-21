import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-phone',
  templateUrl: './choose-phone.component.html',
  styleUrls: ['./choose-phone.component.scss'],
})
export class ChoosePhoneComponent {
  imageUrlInfo = [
    {
      title: 'IPhone-16 Black',
      url: 'https://th.bing.com/th?id=OIF.z0G04oqJ4xm6Y4%2bRP7mesA&rs=1&pid=ImgDetMain',
      alt: 'Iphone-16',
      storage: '128GB',
      ram: '12GB',
      color: 'Black',
      brand: 'Apple',
    },
    {
      title: 'IPhone-16 Blue',
      url: 'https://www.canstarblue.com.au/wp-content/uploads/2024/09/blue-iphone-16-plus.png',
      alt: 'Iphone-16',
      storage: '128GB',
      ram: '12GB',
      color: 'Blue',
      brand: 'Apple',
    },
    {
      title: 'IPhone 16 Pro Blue',
      url: 'https://www.canstarblue.com.au/wp-content/uploads/2024/09/blue-iphone-16-plus.png',
      alt: 'IPhone 16 Pro Blue',
      storage: '128GB',
      ram: '12GB',
      color: 'Blue',
      brand: 'Apple',
    },
    {
      title: 'IPhone 16 Pro Gold',
      url: 'https://www.fonezone.ae/cdn/shop/products/MwQCadyakv.jpg?v=1697640231&width=1946',
      alt: 'IPhone 16 Pro Gold',
      storage: '128GB',
      ram: '12GB',
      color: 'Gold',
      brand: 'Apple',
    },
    {
      title: 'Realme P2 pro Black',
      url: 'https://th.bing.com/th?id=OIF.aKhRV4Hpcwq%2bCQ%2bGfr0%2faw&rs=1&pid=ImgDetMain',
      alt: 'Realme P2 pro Black',
      storage: '128GB',
      ram: '12GB',
      color: 'Black',
      brand: 'Realme',
    },
    {
      title: 'Realme P2 pro Blue',
      url: 'https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/r/e/realme_2_pro_2.png',
      alt: 'Realme P2 pro Blue',
      storage: '128GB',
      ram: '12GB',
      color: 'Blue',
      brand: 'Realme',
    },
  ];

  // filteredList: any= [];

  // apple(event: any): any {
  //   console.log('event', event);
  //   if (event.target.checked) {
  //     this.imageUrlInfo = this.imageUrlInfo.filter((p) => p.brand === 'Apple');
  //     return this.imageUrlInfo;
  //   } else if(!event.target.checked){
  //     return this.imageUrlInfo;
  //   }
  // }

  // realme(e: any): any {
  //   if (e.target.checked) {
  //     this.filteredList.push(this.imageUrlInfo.filter((p) => p.brand === 'Realme'));
  //     return this.filteredList;
  //   } else if(!e.target.checked) {
  //     return this.imageUrlInfo;
  //   }
  // }
}

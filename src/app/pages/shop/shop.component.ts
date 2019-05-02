import { Component, OnInit } from '@angular/core';
import { shopArticle } from 'src/app/Interfaces/shopArticle';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }
  articleList: shopArticle[] = [
    {
      imagesUrl:  ['https://static1.squarespace.com/static/56ce2d7acf80a11b2f1489c7/56ce5501a3360cb99fa1ac75/57748e22b8a79b041a2f5bdf/1467256367062/me_top.png?'],
      description: 'Quiver DHD',
      price: 990
     },
    {
      imagesUrl:  ['https://www.surfmarket.org/images/stories/virtuemart/product/round-nose-fish-lost-mayhem-surfboard.png'],
      description: 'Quatro Mayhem',
      price: 777
    }
  ];
  
  ngOnInit() {
  }

}

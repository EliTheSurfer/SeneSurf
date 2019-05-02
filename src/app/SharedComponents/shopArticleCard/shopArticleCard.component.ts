import { Component, OnInit, Input } from '@angular/core';
import { shopArticle } from 'src/app/Interfaces/shopArticle';

@Component({
  selector: 'app-shopArticleCard',
  templateUrl: './shopArticleCard.component.html',
  styleUrls: ['./shopArticleCard.component.css']
})
export class ShopArticleCardComponent implements OnInit {
  
  @Input() article:shopArticle;
  constructor() { }

  ngOnInit() {
  }

}

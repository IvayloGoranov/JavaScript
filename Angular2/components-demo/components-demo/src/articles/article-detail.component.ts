import { Component, Input } from '@angular/core';

import {Article } from '../data/article';

@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})

export class ArticleDetailComponent {
  @Input() article: Article;

  public descriptionHeight: number;

  constructor() {
    this.descriptionHeight = 30;
  }

  public readMore() : void {
    this.descriptionHeight += 30;
  }
}

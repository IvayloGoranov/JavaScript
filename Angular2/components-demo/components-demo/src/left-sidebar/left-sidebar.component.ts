import { Component } from '@angular/core';

import { Data } from '../data/Data';
import {Article} from "../data/Article";

@Component({
  selector: 'left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})

export class LeftSidebarComponent {
  private data: Data;

  constructor() {
    this.data = new Data();
  }

  public selectedArticle: Article;

  get articles(): Article[] {
    return this.data.getArticles();
  }

  public showArticleDetails(article: Article): void{
    this.selectedArticle = article;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Article }           from '../../models/article';

@Component({
  selector:    'article-detail',
  templateUrl: './article/detail/component.html',
  styleUrls:  ['./article/detail/component.css']
})

export class ArticleDetailComponent implements OnInit {

  articles : Article[];
  article  : Article;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.articles = this.route.snapshot.data.articles;
    this.article  = this.route.snapshot.data.article;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Article }           from '../../models/article';

@Component({
  selector:    'article-list',
  templateUrl: './article/list/component.html',
  styleUrls:  ['./article/list/component.css']
})

export class ArticleListComponent implements OnInit {

  articles : Article[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.articles = this.route.snapshot.data.articles;
  }
}

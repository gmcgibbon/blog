import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Author }            from '../models/author';
import { Blog }              from '../models/blog';

@Component({
  selector:    'blog',
  templateUrl: './blog/component.html',
  styleUrls:  ['./blog/component.css']
})

export class BlogComponent implements OnInit {

  author : Author;
  blog   : Blog;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.author = this.route.snapshot.data.author;
    this.blog   = this.route.snapshot.data.blog;
  }

}

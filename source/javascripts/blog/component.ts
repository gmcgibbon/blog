import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Blog }              from '../models/blog';

@Component({
  selector:    'blog',
  templateUrl: './blog/component.html',
  styleUrls:  ['./blog/component.css']
})

export class BlogComponent implements OnInit {

  blog : Blog;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.blog = this.route.snapshot.data.blog;
  }

}

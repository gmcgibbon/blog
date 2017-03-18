import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { HttpModule }      from '@angular/http';
import { RouterModule }    from '@angular/router';
import { ArticleModule }   from '../article/module';
import { BlogComponent }   from './component';
import { BlogService }     from './service';
import { BlogGetResolver } from './get_resolver';

@NgModule({
  imports:   [
    CommonModule,
    HttpModule,
    ArticleModule,
    RouterModule
  ],
  providers: [
    BlogService,
    BlogGetResolver
  ],
  declarations: [
    BlogComponent
  ]
})
export class BlogModule { }

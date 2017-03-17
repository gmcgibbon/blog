import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { HttpModule }      from '@angular/http';
import { ArticleModule }   from '../article/module';
import { BlogComponent }   from './component';
import { BlogService }     from './service';
import { BlogGetResolver } from './get_resolver';

@NgModule({
  imports:   [
    CommonModule,
    HttpModule,
    ArticleModule
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

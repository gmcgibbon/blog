import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { ArticleModule } from '../article/module';
import { BlogComponent } from './component';
import { BlogService }   from './service';

@NgModule({
  imports:   [
    HttpModule,
    ArticleModule
  ],
  providers: [
    BlogService
  ],
  declarations: [
    BlogComponent
  ]
})
export class BlogModule { }

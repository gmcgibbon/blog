import { NgModule }             from '@angular/core';
import { HttpModule }           from '@angular/http';
import { RouterModule }         from '@angular/router';
import { ArticleService }       from './service';
import { ArticleQueryResolver } from './query_resolver';
import { ArticleListComponent } from './list/component';

@NgModule({
  imports: [
    HttpModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ArticleService,
    ArticleQueryResolver
  ],
  declarations: [
    ArticleListComponent
  ]
})
export class ArticleModule { }

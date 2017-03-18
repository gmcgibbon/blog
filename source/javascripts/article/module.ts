import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { HttpModule }           from '@angular/http';
import { RouterModule }         from '@angular/router';
import { ArticleService }       from './service';
import { ArticleQueryResolver } from './query_resolver';
import { ArticleGetResolver }   from './get_resolver';
import { ArticleListComponent } from './list/component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  providers: [
    ArticleService,
    ArticleQueryResolver,
    ArticleGetResolver
  ],
  declarations: [
    ArticleListComponent
  ]
})
export class ArticleModule { }

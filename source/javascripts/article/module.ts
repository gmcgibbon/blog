import { NgModule }             from '@angular/core';
import { HttpModule }           from '@angular/http';
import { RouterModule }         from '@angular/router';
import { ArticleService }       from './service';
import { ArticleListComponent } from './list/component';

@NgModule({
  imports: [
    HttpModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ArticleService
  ],
  declarations: [
    ArticleListComponent
  ]
})
export class ArticleModule { }

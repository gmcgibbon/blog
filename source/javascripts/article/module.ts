import { NgModule }       from '@angular/core';
import { HttpModule }     from '@angular/http';
import { ArticleService } from './service';

@NgModule({
  imports:   [HttpModule],
  providers: [ArticleService],
})
export class ArticleModule { }

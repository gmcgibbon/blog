import { Injectable }                      from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable }                      from 'rxjs/Observable';
import { Article }                         from '../models/article';
import { ArticleService }                  from './service';

@Injectable()
export class ArticleGetResolver implements Resolve<Article> {

  constructor(private service: ArticleService) { }

  resolve(route: ActivatedRouteSnapshot) : Observable<Article> {
    let id = route.params.id;
    return this.service.get(id);
  }

}

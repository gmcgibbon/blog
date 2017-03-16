import { Injectable }                      from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable }                      from 'rxjs/Observable';
import { Blog }                            from '../models/blog';
import { BlogService }                     from './service';

@Injectable()
export class BlogGetResolver implements Resolve<Blog> {

  constructor(private service: BlogService) { }

  resolve(route: ActivatedRouteSnapshot) : Observable<Blog> {
    return this.service.get();
  }

}

import { Injectable }                      from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable }                      from 'rxjs/Observable';
import { Author }                          from '../models/author';
import { AuthorService }                   from './service';

@Injectable()
export class AuthorGetResolver implements Resolve<Author> {

  constructor(private service: AuthorService) { }

  resolve(route: ActivatedRouteSnapshot) : Observable<Author> {
    return this.service.get();
  }

}

import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Blog }           from '../models/blog';

@Injectable()
export class BlogService {

  constructor (private http: Http) { }

  private url = `/api/blog.json`;

  get(): Observable<Blog> {
    return this.http
      .get(this.url)
      .map(this.map)
      .catch(this.catch);
  }

  private map(response: Response) {
    let json = response.json();
    return json;
  }

  private catch(error: any) {
    let message = `${error.status} - ${error.statusText}`;
    console.error(message);
    return Observable.throw(message);
  }
}

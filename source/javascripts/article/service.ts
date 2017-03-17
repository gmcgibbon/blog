import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Article }        from '../models/article';

@Injectable()
export class ArticleService {

  constructor (private http: Http) { }

  private url = `/api/articles.json`;

  query(): Observable<Article[]> {
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

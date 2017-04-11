import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Author }         from '../models/author';

@Injectable()
export class AuthorService {

  constructor (private http: Http) { }

  private url = `/api/author.json`;

  get() : Observable<Author> {
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

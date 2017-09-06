import { Observable } from 'rxjs/Rx';
import { retry } from 'rxjs/operator/retry';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {

  constructor(private http: Http) { }

  getMovies () {
    return Observable.timer(0, 2000)
    .concatMap(x => this.http.get('/api/movies'))
      .map(r => r.json())
      // .catch(err => ....)
      .do(r => console.table(r))
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  query: (query: string) => `/jokes/search?query=${query}`
};

@Injectable()
export class JokeService {

  constructor(private httpClient: HttpClient) { }

  getJoke(query: string): Observable<string> {
    return this.httpClient
      .cache()
      .get(routes.query(query))
      .pipe(
        map((body: any) => body.result),
        catchError(() => of([{value: 'Error, could not load joke :-('}]))
      );      
  }

}

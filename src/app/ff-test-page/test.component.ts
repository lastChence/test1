import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { JokeService } from './joke.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  isLoading: boolean;
  query: string;
  jokes: any;

  constructor(private jokeService: JokeService) { }

  ngOnInit() {}

  getJoke(query:string) {
    if(query.length > 2) {
        this.isLoading = true;
        this.jokeService.getJoke(query)
        .pipe(finalize(() => { this.isLoading = false; }))
        .subscribe((joke: string) => { this.jokes = joke; });   
    }
    else {
        this.jokes = [{value: 'Error, could not load joke :-('}];
    }
  }

}

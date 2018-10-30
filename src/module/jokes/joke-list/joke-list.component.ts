import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from '../types';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {
  jokes$: Observable<Array<Joke>>;
  constructor(
    private jokeService: JokeService
  ) { }

  ngOnInit() {
    this.jokes$ = this.jokeService.jokes;
  }
  getVotes(id: number) {
    return Math.floor(10 + Math.random() * (100 - 10));
  }
}

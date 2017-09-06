import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';
import { MoviesService } from './movies.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private movieService: MoviesService){}
  // subscription: Subscription;
  // movies: any[] = [];
  // title = 'app';

  //   public ngOnInit(): void {
  //       this.subscription =  this.movieService.getMovies()
  //       .subscribe(m => this.movies = m, err => console.error(err))
  //   }

  //   public ngOnDestroy(): void {
  //       this.subscription.unsubscribe();
  //   }


  movies: Observable<any[]>;
  title = 'app';

    public ngOnInit(): void {
        this.movies = this.movieService.getMovies();
    }

    public ngOnDestroy(): void {
    }
}

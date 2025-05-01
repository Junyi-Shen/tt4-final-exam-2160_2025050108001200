import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  newMovie: Movie = { id: 0, title: '', genre: '', watched: false, rating: 0 };

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(data => this.movies = data);
  }

  addMovie(): void {
    this.movieService.createMovie(this.newMovie).subscribe(() => {
      this.getMovies();
      this.newMovie = { id: 0, title: '', genre: '', watched: false, rating: 0 };
    });
  }

  deleteMovie(id: number): void {
    this.movieService.deleteMovie(id).subscribe(() => this.getMovies());
  }
}

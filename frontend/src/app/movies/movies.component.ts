import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  movies: any[] = [];
  newMovie = {
    title: '',
    genre: '',
    rating: 0,
    watched: false
  };

  addMovie() {
    const newEntry = { ...this.newMovie, id: Date.now() };
    this.movies.push(newEntry);
    this.newMovie = { title: '', genre: '', rating: 0, watched: false };
  }

  deleteMovie(id: number) {
    this.movies = this.movies.filter(m => m.id !== id);
  }
}

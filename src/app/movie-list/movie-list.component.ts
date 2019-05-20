import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { filter } from 'rxjs/operators';
import { log } from 'util';
import { IMovie } from '../movie';
import { map } from 'rxjs/operators';
import { finalset } from '../movie';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  public moviedata: any[];



  public updatedurl: string = 'https://image.tmdb.org/t/p/original/';
  length = 100;
  pageSize = 10;
  pageSizeOptions = [1, 2, 5, 10];
  pageNo: number = 1;

  constructor(private _movieservice: MoviesService) {


  }

  ngOnInit() {

    this.fetchMovieData();

    /*this._movieservice.getmovies()

      .subscribe(data => {
        this.moviedata = data;
        for (let i = 0; i < 10; i++) {
          this.fullurl.push(this.updatedurl + this.moviedata['results'][i].poster_path);

        }
        console.log(this.moviedata);
        console.log(this.fullurl);

      }


      );*/
  }

  fetchMovieData() {
    this._movieservice.getmovies(this.pageNo)

      .subscribe(data => {
        this.moviedata = data;

        for (let i = 0; i < 20; i++) {
          this.moviedata['results'][i].poster_path = this.updatedurl + this.moviedata['results'][i].poster_path;
          console.log(this.moviedata['results'][i].poster_path);

        }

      }
      )
  }

  nextPage() {
    this.pageNo++;
    this.fetchMovieData();
  }

  prevPage() {

    this.pageNo--;
    if (this.pageNo == 0) {
      this.pageNo = 1;
    }
    this.fetchMovieData();
  }


}



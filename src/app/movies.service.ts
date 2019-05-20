import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from './movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  private _url: string = 'https://api.themoviedb.org/3/movie/popular?api_key=4b10cf2f8e6ed1fcb506bd3929ecee40&language=en-US&page='
  constructor(private http: HttpClient) { }

  getmovies(pageNo): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this._url + pageNo);
  }



}

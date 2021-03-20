import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IMovie, ISearchResults } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private API_ENDPOINT: string = 'https://api.themoviedb.org/3';
  private GET_SEARCH_MOVIE: string = 'search/movie'
  private API_KEY: string = '85204a8cc33baf447559fb6d51b18313';

  // Api example: https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&query=la+la+land&page=3

  constructor(private http: HttpClient) {}

  public searchMovie(query: string, page?: number): Observable<any> {
    return this.http
      .get(`${this.API_ENDPOINT}/${this.GET_SEARCH_MOVIE}?api_key=${this.API_KEY}&query=${query}&page=${page}`)
      .pipe(
        //@ts-ignore
        map((res: ISearchResults) => res.results),
        map((movies: IMovie[]) =>
          movies.map(({ poster_path, title, vote_average }) => {
            return { poster_path, title, vote_average };
          })
        )
      );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IMovieDetail, ISearchResults } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private API_ENDPOINT: string = 'https://api.themoviedb.org/3';
  private API_KEY: string = '85204a8cc33baf447559fb6d51b18313';
  private IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  // Api example: https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&query=la+la+land&page=3
  // Api example: https://api.themoviedb.org/3/movie/75780?api_key=85204a8cc33baf447559fb6d51b18313

  constructor(private http: HttpClient) {}


  public searchMovies(query: string, page?: number): Observable<any> {
    return this.http
      .get(
        `${this.API_ENDPOINT}/search/movie?api_key=${this.API_KEY}&query=${query}&page=${page}`
      )
      .pipe(
        //@ts-ignore
        map((res: ISearchResults) => {
          return {
            ...res,
            results: res.results.map(({ id, poster_path, title, vote_average }) => {
              return {
                id,
                poster_path: poster_path ? `${this.IMG_BASE_URL}/${poster_path}` : null,
                title,
                vote_average,
              };
            }),
          };
        })
      );
  }


  public getMovie(id: string): Observable<IMovieDetail |any> {
    return this.http
    .get(
      `${this.API_ENDPOINT}/movie/${id}?api_key=${this.API_KEY}`
    )
    .pipe(
      tap( res => console.log(res))
    )
  }
}

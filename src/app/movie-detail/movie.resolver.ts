import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IMovieDetail } from '../interfaces';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<boolean> {
  
  constructor(private db: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovieDetail | any> {
    const movieId = route.paramMap.get('id')
    return movieId ? this.db.getMovie(movieId) : of(null)
  }
}

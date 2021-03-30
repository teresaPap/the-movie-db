import { Injectable } from '@angular/core';
import {
	Router,
	Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot,
} from '@angular/router';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IMovieDetail } from '../interfaces';
import { DataService } from '../services/data.service';

@Injectable({
	providedIn: 'root'
})
export class MovieResolver implements Resolve<IMovieDetail> {
	constructor(private db: DataService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		const movieId = route.paramMap.get('id');
		if (!movieId) return of(null);
    
		return this.db.getMovie(movieId).pipe(tap((res) => console.log('Data to resolve: ',res)));
	}
}

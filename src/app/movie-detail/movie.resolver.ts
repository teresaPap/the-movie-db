import { Injectable } from '@angular/core';
import {
	Router,
	Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot,
} from '@angular/router';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService } from '../services/data.service';

@Injectable()
export class MovieResolver implements Resolve<boolean> {
	constructor(private db: DataService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		const movieId = route.paramMap.get('id');
		if (!movieId) return of(null);
    
		return this.db.getMovie(movieId).pipe(tap((res) => console.log('Data to resolve: ',res)));
	}
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMovieDetail } from '../interfaces';

@Component({
	selector: 'tmdb-movie',
	templateUrl: './movie.component.html',
	styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
	public movie: IMovieDetail = {} as IMovieDetail;

	constructor(
		@Inject(MAT_DIALOG_DATA) resolvedData: IMovieDetail
	) {
		this.movie = resolvedData
	}

}

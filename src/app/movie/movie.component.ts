import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { IMovieDetail } from '../interfaces';

@Component({
	selector: 'tmdb-movie',
	templateUrl: './movie.component.html',
	styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
	public movie: IMovieDetail = {} as IMovieDetail;

	constructor(
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
    const resolvedData = this.route.snapshot.data['resolvedData']
		this.onMovieRetrieved(resolvedData)
	}

	private onMovieRetrieved(movie: IMovieDetail): void {
    	console.log('TODO: movie:', movie)
		this.movie = movie;
	}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovieDetail } from '../interfaces';

@Component({
	selector: 'tmdb-movie-detail',
	templateUrl: './movie-detail.component.html',
	styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
	public movie: IMovieDetail = {} as IMovieDetail;

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
    const resolvedData = this.route.snapshot.data['resolvedData']
		this.onMovieRetrieved(resolvedData)
	}

	private onMovieRetrieved(movie: IMovieDetail): void {
    console.log('TODO: Why is "movie" empty here?')
		this.movie = movie;
	}
}

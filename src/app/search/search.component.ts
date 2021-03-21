import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IMovieDisplayData, ISearchResults } from '../interfaces';
import { DataService } from '../services/data.service';

@Component({
	selector: 'tmdb-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
	public searchForm: FormGroup;
	public movies: IMovieDisplayData[] = [];

	public activePage: number = 0;
	public activeKeyword: string = '';
	public totalMovies: number = 0;

	constructor(private fb: FormBuilder, private db: DataService) {
		this.searchForm = this.fb.group({
			keyword: [
				'',
				[Validators.minLength(3), Validators.pattern('[a-zA-Z0-9]+')],
			],
		});
	}

	public submitSearchForm(page?: number): Subscription | void {
		if (!this.searchForm.controls['keyword'].value) {
			this.activePage = 0;
			return;
		}
		this.activeKeyword = this.searchForm.controls['keyword'].value;
		return this.db
			.searchMovie(this.activeKeyword, page)
			.subscribe((res: ISearchResults) => {
				this.activePage = res.page;
				this.movies = res.results;
				this.totalMovies = res.total_results;
			});
	}
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { IMovieDisplayData } from '../interfaces';
import { DataService } from '../services/data.service';

@Component({
  selector: 'tmdb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public searchForm: FormGroup;
  public movies: IMovieDisplayData[] = [];

  // Movie Card Elevation
  public defaultElevation = 0;
  public raisedElevation = 2;

  // MatPaginator Inputs
  public length = 0;
  public pageSize = 20;

  public activePage: number = 0;
  public activeKeyword: string = '';

  constructor(private fb: FormBuilder, private db: DataService) {
    this.searchForm = this.fb.group({
      keyword: [
        '',
        [Validators.minLength(3), Validators.pattern('[a-zA-Z0-9]+')],
      ],
    });
  }

  public onPageChange(event: PageEvent): Subscription | void {
    const step =
      event.previousPageIndex != undefined &&
      event.previousPageIndex > event.pageIndex
        ? -1
        : 1;

    return this.db
      .searchMovie(
        this.activeKeyword,
        step + this.activePage
      )
      .subscribe((res) => {
        this.movies = res.results;
        this.activePage = res.page;
      });
  }

  public submitSearchForm(): Subscription | void {
    if (!this.searchForm.controls['keyword'].value) {
      return;
    }
    this.activeKeyword = this.searchForm.controls['keyword'].value
    return this.db
      .searchMovie(this.activeKeyword)
      .subscribe((res) => {
        this.activePage = res.page;
        this.movies = res.results;
        this.length = res.total_results;
      });
  }
}

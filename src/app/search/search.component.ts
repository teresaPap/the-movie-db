import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  public defaultElevation = 0;
  public raisedElevation = 2;

  constructor(private fb: FormBuilder, private db: DataService) {
    this.searchForm = this.fb.group({
      keyword: [
        '',
        [Validators.minLength(3), Validators.pattern('[a-zA-Z0-9]+')],
      ],
    });
  }

  public submitSearchForm(): Subscription | void {
    if (!this.searchForm.controls['keyword'].value) {
      return;
    }
    return this.db
      .searchMovie(this.searchForm.controls['keyword'].value)
      .subscribe((res) => {
        console.log(res);
        this.movies = res
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'tmdb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchForm: FormGroup;

  constructor(private fb: FormBuilder, private db: DataService) {
    this.searchForm = this.fb.group({
      keyword: [
        '',
        [Validators.minLength(3), Validators.pattern('[a-zA-Z0-9]+')],
      ],
    });
  }

  ngOnInit(): void {}

  public submitSearchForm(): any {
    if (!this.searchForm.controls['keyword'].value) {
      return;
    }
    return this.db
      .searchMovie(this.searchForm.controls['keyword'].value)
      .subscribe((res) => {
        console.log(res);
      });
  }
}

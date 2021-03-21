import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { IMovieDisplayData } from '../interfaces';

@Component({
  selector: 'tmdb-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @Input() movies: IMovieDisplayData[] = [];
  @Input() paginatorLength: number = 0;
  @Output() pageChangedEvent = new EventEmitter<1|-1>();
  
  // Movie Card Elevation
  public defaultElevation = 0;
  public raisedElevation = 2;

  // MatPaginator Inputs
  public length = 0;
  public pageSize = 20;

  constructor() {}

  ngOnInit(): void {}

  public onPageChange(event: PageEvent): Subscription | void {
    const step =
      event.previousPageIndex != undefined &&
      event.previousPageIndex > event.pageIndex
        ? -1
        : 1;
      this.pageChangedEvent.emit(step)
  }
}

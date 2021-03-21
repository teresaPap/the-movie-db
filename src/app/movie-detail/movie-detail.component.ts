import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tmdb-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public movie: any;

	constructor(private route: ActivatedRoute) {
		this.movie = this.route.snapshot.data['resolvedData']
	}

  ngOnInit(): void {
  }

}

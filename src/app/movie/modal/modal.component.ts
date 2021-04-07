// reference: https://blog.angular-university.io/angular-material-dialog/
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovieDetail } from 'src/app/interfaces';
import { MovieComponent } from 'src/app/movie/movie.component';

@Component({
	selector: 'tmdb-movie-modal',
	template: '',
	styleUrls: [],
})
export class MovieModalComponent {
	constructor(
		public dialog: MatDialog,
		public router: Router,
		public route: ActivatedRoute
	) {
		this.openDialog();
	}

	public openDialog(): void {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.data = this.route.snapshot.data['resolvedData']
		dialogConfig.width = '80%'

		const dialogRef = this.dialog.open(MovieComponent, dialogConfig);

		dialogRef.afterClosed().subscribe(() =>
			this.router.navigate(['/'], { relativeTo: this.route })
		);
	}
}

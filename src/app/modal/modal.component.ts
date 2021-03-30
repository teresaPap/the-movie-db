import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieComponent } from '../movie/movie.component';

@Component({
	selector: 'tmdb-modal',
	template: '',
	styleUrls: [],
})
export class ModalComponent implements OnInit {
	constructor(
		public dialog: MatDialog,
		public router: Router,
		public route: ActivatedRoute
	) {
		this.openDialog();
	}
	ngOnInit(): void {
		const resolvedData = this.route.snapshot.data['resolvedData']
			console.log('modal:', resolvedData)
		}

	public openDialog(): void {
		const dialogRef = this.dialog.open(MovieComponent, {});
		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
			this.router.navigate(['/'], { relativeTo: this.route });
		});
	}
}

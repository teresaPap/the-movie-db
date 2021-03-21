import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [MovieDetailComponent],
	imports: [
		CommonModule,
	],
})
export class MovieDetailModule {}

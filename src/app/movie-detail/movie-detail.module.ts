import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MovieDetailComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: MovieDetailComponent }
    ]),
    CommonModule,
  ]
})
export class MovieDetailModule { }

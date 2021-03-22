import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieResolver } from './movie-detail/movie.resolver';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
	{
		path: 'movie',
		component: ModalComponent,
		// children: [
		// 	{
		// 		path: ':id',
		// 		component: MovieDetailComponent,
		// 		resolve: { resolvedData: MovieResolver },
		//         outlet: 'modal',
		// 	},
		// ],		
	},
	{ path: '', component: SearchComponent },
	// this way works - resolved data are propagated in MovieDetailComponent
	{
		path: 'movie/:id',
		component: MovieDetailComponent,
		resolve: { resolvedData: MovieResolver },
		outlet: 'modal',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

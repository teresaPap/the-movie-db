import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { MovieResolver } from './movie-detail/movie.resolver';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
	{ path: '', component: SearchComponent },
	{
		path: 'movie',
		component: ModalComponent,
		children: [
			{
				path: ':id',
				loadChildren: () =>
					import('./movie-detail/movie-detail.module').then(
						(m) => m.MovieDetailModule
					),
				resolve: { resolvedData: MovieResolver },
			},
		],
		outlet: 'modal',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

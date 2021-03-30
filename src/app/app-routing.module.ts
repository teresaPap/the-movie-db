import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { MovieComponent } from './movie/movie.component';
import { MovieResolver } from './movie/movie.resolver';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
	{
		path: 'movie',
		component: ModalComponent,
		outlet: 'modal'
	},
	{
		path: 'movie/:id',
		component: MovieComponent,
		resolve: { resolvedData: MovieResolver },
		outlet: 'modal',
	},
	{ path: '', component: SearchComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

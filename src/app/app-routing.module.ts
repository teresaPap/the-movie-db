import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { MovieModalComponent } from 'src/app/movie/modal/modal.component';
import { MovieResolver } from 'src/app/movie/movie.resolver';
import { SearchComponent } from 'src/app/search/search.component';

const routes: Routes = [
	{
		path: 'movie/:id',
		component: MovieModalComponent,
		resolve: { resolvedData: MovieResolver },
		outlet: 'modal',
	},
	{ path: '', component: SearchComponent },
	{ path: '**', component: ErrorComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

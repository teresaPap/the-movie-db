import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { ErrorComponent } from 'src/app/error/error.component';
import { SearchComponent } from 'src/app/search/search.component';
import { MaterialElevationDirective } from 'src/app/directives/material-elevation.directive';
import { ResultsComponent } from 'src/app/search/results/results.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieModule } from 'src/app/movie/movie.module';

@NgModule({
	declarations: [
		AppComponent,
		SearchComponent,
		ResultsComponent,
		MaterialElevationDirective,
		ErrorComponent,
	],
	imports: [
		SharedModule,
		BrowserModule,
		HttpClientModule,
		NoopAnimationsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatFormFieldModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatPaginatorModule,
		MovieModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

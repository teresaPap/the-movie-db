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
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { ErrorComponent } from 'src/app/error/error.component';
import { SearchComponent } from 'src/app/search/search.component';
import { MovieModalComponent } from 'src/app/movie/modal/modal.component';
import { MaterialElevationDirective } from 'src/app/directives/material-elevation.directive';
import { MovieComponent } from 'src/app/movie/movie.component';
import { ResultsComponent } from 'src/app/search/results/results.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
	declarations: [
		AppComponent,
		SearchComponent,
		ResultsComponent,
		MovieModalComponent,
		MaterialElevationDirective,
		MovieComponent,
		ErrorComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		HttpClientModule,
		NoopAnimationsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatFormFieldModule,
		MatIconModule,
		MatButtonModule,
		MatDialogModule,
		MatCardModule,
		MatPaginatorModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

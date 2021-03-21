import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchResultsComponent } from './search-results.component';
import { MaterialElevationDirective } from './directives/material-elevation.directive';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [SearchResultsComponent, MaterialElevationDirective],
	imports: [CommonModule, MatCardModule, MatPaginatorModule, RouterModule],
	exports: [SearchResultsComponent],
})
export class SearchResultsModule {}

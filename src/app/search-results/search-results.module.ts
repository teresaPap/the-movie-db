import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SearchResultsComponent } from './search-results.component';
import { MaterialElevationDirective } from './directives/material-elevation.directive';


@NgModule({
  declarations: [SearchResultsComponent, MaterialElevationDirective],
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
  ], 
  exports: [
    SearchResultsComponent
  ]
})
export class SearchResultsModule { }

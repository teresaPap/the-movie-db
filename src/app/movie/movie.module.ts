import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MovieModalComponent } from './modal/modal.component';
import { MovieComponent } from './movie.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { CommaSeparatedPipe } from './pipes/comma-separated.pipe';

@NgModule({
  declarations: [
		MovieModalComponent,
		MovieComponent,
		CommaSeparatedPipe,
  ],
  imports: [
    SharedModule,
		MatDialogModule,
		MatGridListModule,
  ],
  exports: [
    MovieModalComponent,
		MovieComponent,
  ]
})
export class MovieModule { }

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MovieModalComponent } from './modal/modal.component';
import { MovieComponent } from './movie.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
		MovieModalComponent,
		MovieComponent,
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MovieDetailsContainerComponent } from './containers';
import { MovieDetailsComponent } from './components';


@NgModule({
  declarations: [
    MovieDetailsComponent,
    MovieDetailsContainerComponent,
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
  ],
})
export class MovieDetailsModule {
}

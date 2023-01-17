import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesContainerComponent } from './containers';
import { LayoutComponent, MoviesListComponent, SearchComponent } from './components';


@NgModule({
  declarations: [
    MoviesContainerComponent,
    SearchComponent,
    MoviesListComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
  ],
  exports: [
    MoviesListComponent,
  ],
})
export class MoviesModule {
}

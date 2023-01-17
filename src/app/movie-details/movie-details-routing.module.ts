import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsContainerComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDetailsRoutingModule {
}

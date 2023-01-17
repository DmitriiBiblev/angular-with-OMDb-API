import { Component } from '@angular/core';

@Component({
  selector: 'app-movies-container',
  template: `
    <app-layout>
      <app-search></app-search>
      <app-movies-list></app-movies-list>
    </app-layout>
  `,
})
export class MoviesContainerComponent {

}

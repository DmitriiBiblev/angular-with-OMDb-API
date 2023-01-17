import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-movie-details-container',
  template: `
    <app-movie-details></app-movie-details>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailsContainerComponent {

}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-movie-details-container',
  template: `
    <app-movies-details></app-movies-details>
  `,
  styleUrls: ['./movie-details-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailsContainerComponent {

}

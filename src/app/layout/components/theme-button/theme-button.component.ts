import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ITheme } from '../../interfaces';
import { THEMES_DATA } from '../../data';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss'],
  animations: [
    trigger('dropdown', [
      transition(':enter', [
        style({ height: 0, overflow: 'hidden', opacity: 0 }),
        animate('200ms', style({ height: '*', opacity: 1, transform: 'none' })),
      ]),

      transition(':leave', [
        style({ height: '*', overflow: 'hidden', opacity: 1, transform: 'none' }),
        animate('200ms', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeButtonComponent implements OnInit {
  currentThemeName: string = localStorage.getItem('theme') ?? 'default';
  htmlElement: HTMLHtmlElement = document.getElementsByTagName('html')[0];
  themes: ITheme[] = THEMES_DATA;
  isOpened: boolean = false;

  ngOnInit() {
    this.htmlElement.className = this.currentThemeName;
  }

  changeTheme(themeName: string) {
    localStorage.setItem('theme', themeName);
    this.currentThemeName = themeName;
    this.htmlElement.className = themeName;
    this.switchThemeChanger();
  };

  switchThemeChanger() {
    this.isOpened = !this.isOpened;
  }
}

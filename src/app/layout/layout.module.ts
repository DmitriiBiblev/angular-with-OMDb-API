import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent, LayoutComponent, ThemeButtonComponent } from './components';
import { ClickOutsideDirective } from './directives';


@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    ThemeButtonComponent,
    ClickOutsideDirective,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
})
export class LayoutModule {
}

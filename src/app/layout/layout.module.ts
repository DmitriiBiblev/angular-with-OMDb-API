import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent, LayoutComponent, ThemeButtonComponent } from './components';


@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    ThemeButtonComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
})
export class LayoutModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { RouterModule } from '@angular/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [BaseComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    LoadingBarModule,
    LoadingBarRouterModule
  ],
  exports: [
    BaseComponent
  ]
})
export class ThemeModule { }

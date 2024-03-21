import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AppSidebarComponent,
    AppMenuComponent,
    TopbarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './sidebar/menu/menu.component';
import { MenuitemCopmonent } from './sidebar/menuitem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent,
    AppMenuComponent,
    TopbarComponent,
    SidebarComponent,
    MenuComponent,
    MenuitemCopmonent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }

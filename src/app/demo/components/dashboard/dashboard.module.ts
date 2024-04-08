import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { MenuModule } from 'primeng/menu';

import { DashboardRoutingModule } from './dashboard-routing.module'
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    ButtonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { ConfigComponent } from './config.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';


@NgModule({
  declarations: [ConfigComponent],
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
    RadioButtonModule,
    FormsModule,
    InputSwitchModule
  ],
  exports: [
    ConfigComponent
  ]
})
export class ConfigModule { }

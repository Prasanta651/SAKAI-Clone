import { Component } from '@angular/core';
import { LayoutService } from '../service/layout.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent {
  constructor(private layoutService: LayoutService) {}
  scales: number[] = [12, 13, 14, 15, 16];

  get visible(): boolean {
    return this.layoutService.state.configSidebarVisible;
  }

  set visible(_val: boolean) {
    this.layoutService.state.configSidebarVisible = _val;
  }

  get menuMode(): string {
    return this.layoutService.config().menuMode;
  }

  set menuMode(_val: string) {
    this.layoutService.config.update((config) => ({
      ...config,
      menuMode: _val,      
    }));
  }

  get inputStyle(): string {
    return this.layoutService.config().inputStyle;
  }

  set inputStyle(_val: string) {
    this.layoutService.config().inputStyle = _val;
  }

  get ripple(): boolean {
    return this.layoutService.config().ripple;
  }

  set ripple(_val: boolean) {
      this.layoutService.config.update((config) => ({
          ...config,
          ripple: _val,
      }));
  }

  set theme(val: string) {
    this.layoutService.config.update((config) => ({
      ...config,
      theme: val,
    }));
  }
  get theme(): string {
    return this.layoutService.config().theme;
  }

  set colorScheme(val: string) {
    this.layoutService.config.update((config) => ({
      ...config,
      colorScheme: val,
    }));
  }
  
  get colorScheme(): string {
    return this.layoutService.config().colorScheme;
  }

  get scale(): number {
    return this.layoutService.config().scale;
  }
  set scale(_val: number) {
      this.layoutService.config.update((config) => ({
          ...config,
          scale: _val,
      }));
  }

  decrementScale() {
    this.scale--;
  }

  incrementScale() {
      this.scale++;
  }

  changeTheme(theme: string, colorScheme: string) {
    this.theme = theme;
    this.colorScheme = colorScheme;
  }


  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }
}

import { OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { LayoutService } from './topbar/service/layout.service';
import { Router } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnDestroy{

  overlayMenuOpenSubscription: Subscription;

  menuOutsideClickListener: any;

  profileMenuOutsideClickListener: any;

  @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;

  @ViewChild(TopbarComponent) appTopbar!: TopbarComponent;

  constructor(public layoutService: LayoutService, public renderer: Renderer2, public router: Router) {
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      if (!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
          const isOutsideClicked = !(this.appTopbar.menuButton.nativeElement.isSameNode(event.target) || this.appTopbar.menuButton.nativeElement.contains(event.target));
          if(isOutsideClicked) {
            this.hideMenu();
          }
        })
      }
    })
  }

  hideMenu() {
    this.layoutService.state.overlayMenuActive = false;
    // TODO
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
  }

  ngOnDestroy(): void {
      
  }
}

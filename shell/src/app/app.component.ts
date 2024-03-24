import {Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents-fiori/dist/ShellBar";
import "@ui5/webcomponents-icons/dist/nav-back.js";
import "@ui5/webcomponents-icons/dist/customer.js";
import "@ui5/webcomponents-fiori/dist/SideNavigation.js";
import "@ui5/webcomponents-fiori/dist/SideNavigationItem.js";
import "@ui5/webcomponents-icons/dist/menu.js";
import "@ui5/webcomponents-icons/dist/home.js";
import "@ui5/webcomponents-icons/dist/factory.js";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="tool-layout">
      <ui5-shellbar primary-title="Corporate Portal">
        <ui5-avatar slot="profile" icon="customer"></ui5-avatar>
        <img slot="logo" src="/assets/sap-logo.png">
        <ui5-button icon="menu" slot="startButton" id="toggle" (click)="toggleMenu()"></ui5-button>
      </ui5-shellbar>
      
        <ui5-side-navigation #sideNavigation>
          <ui5-side-navigation-item text="Home" icon="home" routerLink="/" [selected]="activePath === ''"></ui5-side-navigation-item>
          <ui5-side-navigation-item text="Product" icon="factory" routerLink="/product" [selected]="activePath === 'product'">
          </ui5-side-navigation-item>
        </ui5-side-navigation>

        <div class="content">
          <router-outlet/>
        </div>
    </div>
  `,
  styles: `
    html, body {
      padding: 0;
      margin: 0;
    }

    ui5-side-navigation {
      height: 100%;
    }

    .tool-layout {
      height: 100%;
      background: var(--sapBackgroundColor);
      display: grid;
      gap: 0.5rem;
      grid-template-rows: auto 1fr;
      grid-template-columns: auto 1fr;
    }

    .tool-layout > * {
      z-index: 1;
    }

    ui5-shellbar {
      grid-column: 1 / span 2;
      grid-row: 1 / 2;
    }

    ui5-shellbar::part(root) {
      padding-inline-start: 0.75rem;
      padding-inline-end: 1.25rem;
    }
    
    .content {
      padding: 1rem;
    }
  `,
})
export class AppComponent{

  @ViewChild('sideNavigation') sideNavigation!: ElementRef<HTMLElement>;
  activePath?: string;

  constructor(router: Router, activatedRoute: ActivatedRoute) {
    router.events.pipe(filter(ev => (ev instanceof NavigationEnd)))
        .subscribe(() => this.activePath = activatedRoute.firstChild?.routeConfig?.path);
  }

  toggleMenu() {
    this.sideNavigation.nativeElement.toggleAttribute('collapsed');
  }
}

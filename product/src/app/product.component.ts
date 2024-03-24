import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import "@ui5/webcomponents/dist/TabContainer.js";
import "@ui5/webcomponents/dist/Tab.js";
import {filter} from "rxjs";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <ui5-title>Product</ui5-title>
    <ui5-tabcontainer fixed collapsed (tab-select)="navigateTo($event)">
      <ui5-tab text="List" data-link="product-list" [selected]="activePath === 'product-list'"></ui5-tab>
      <ui5-tab text="Maintenance" data-link="maintenance" [selected]="activePath === 'maintenance'"></ui5-tab>
    </ui5-tabcontainer>
    
    <router-outlet />
  `,
  styles: `
    ui5-title {
      margin-bottom: 1rem;
    }
  `,
})
export class ProductComponent {
  activePath?: string;

  constructor(private router: Router, protected activatedRoute: ActivatedRoute) {
    router.events.pipe(filter(ev => (ev instanceof NavigationEnd)))
        .subscribe(() => this.activePath = this.activatedRoute.firstChild?.routeConfig?.path);
  }

  navigateTo(productList: Event) {
    const link = (productList as CustomEvent).detail.tab.dataset.link;
    void this.router.navigate([link], {relativeTo: this.activatedRoute});
  }
}

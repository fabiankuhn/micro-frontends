import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents-fiori/dist/ShellBar";
import "@ui5/webcomponents-icons/dist/nav-back.js";
import "@ui5/webcomponents-icons/dist/customer.js";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <ui5-shellbar primary-title="Corporate Portal" secondary-title="secondary title">
      <ui5-avatar slot="profile" icon="customer"></ui5-avatar>
      <img slot="logo" src="/assets/sap-logo.png">
      <ui5-button icon="nav-back" slot="startButton"></ui5-button>
    </ui5-shellbar>
    <app-nasty></app-nasty>
    <router-outlet />
  `,
})
export class AppComponent {
  title = 'shell';
}

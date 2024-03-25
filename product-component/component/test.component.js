import {html, LitElement, property} from 'lit-element';
import {customElement} from 'lit-element/decorators.js';
import "@ui5/webcomponents/dist/Card";
import "@ui5/webcomponents/dist/CardHeader.js"
import "@ui5/webcomponents/dist/Icon.js"

import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
setTheme("sap_fiori_3_dark");

@customElement('mf-test')
class TimelineComponent extends LitElement {

  @property()
  inputText;

  render() {
    return html`
        <ui5-card>
            <ui5-card-header slot="header" title-text="Open Issues" subtitle-text="${this.inputText}">
            </ui5-card-header>
            <ui5-list>
                <ui5-li>I break themes</ui5-li>
            </ui5-list>
        </ui5-card> 
    `
  }
}

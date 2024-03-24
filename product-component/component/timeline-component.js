import {html, LitElement, property} from 'lit-element';
import {customElement} from 'lit-element/decorators.js';
import "@ui5/webcomponents/dist/Card";
import "@ui5/webcomponents/dist/CardHeader.js"
import "@ui5/webcomponents/dist/Icon.js"
import "@ui5/webcomponents-icons/dist/phone.js";
import "@ui5/webcomponents-icons/dist/calendar.js";
import "@ui5/webcomponents-fiori/dist/Timeline.js";

@customElement('mf-timeline')
class TimelineComponent extends LitElement {

  @property()
  inputText;

  render() {
    return html`
        <ui5-card>
            <ui5-card-header slot="header" title-text="Product Todos" subtitle-text="${this.inputText}">
            </ui5-card-header>
            <ui5-timeline>
                <ui5-timeline-item title-text="called" timestamp="1487583000000" icon="phone" name="John Smith" name-clickable></ui5-timeline-item>
                <ui5-timeline-item title-text="Product Design" timestamp="1517349600000" icon="calendar">
                    Prod A - 0122.20
                </ui5-timeline-item>
                <ui5-timeline-item title-text="Video Conference Call - Product A" timestamp="1485813600000" icon="calendar">
                    Online meeting
                </ui5-timeline-item>
            </ui5-timeline>
        </ui5-card> 
    `
  }
}

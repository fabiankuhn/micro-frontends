import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import "@ui5/webcomponents/dist/Select";
import "@ui5/webcomponents-icons/dist/iphone.js";
import "@ui5/webcomponents-icons/dist/ipad.js";
import "@ui5/webcomponents-icons/dist/laptop.js";
import "@ui5/webcomponents/dist/ComboBox";
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";
import {ProductTableComponent} from "./product-table.component";

@Component({
  selector: 'app-home',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="page">
      <div class="filter">
        <ui5-select>
          <ui5-option icon="iphone">Phone</ui5-option>
          <ui5-option icon="ipad">Tablet</ui5-option>
          <ui5-option icon="laptop" selected>Desktop</ui5-option>
        </ui5-select>

        <ui5-combobox placeholder="Enter value">
          <ui5-cb-item text="Austria"></ui5-cb-item>
          <ui5-cb-item text="Bulgaria"></ui5-cb-item>
          <ui5-cb-item text="Germany"></ui5-cb-item>
          <ui5-cb-item text="Italy"></ui5-cb-item>
          <ui5-cb-item text="Spain"></ui5-cb-item>
        </ui5-combobox>
      </div>

      <app-product-table></app-product-table>
    </div>
  `,
  styles: `
    .page {
      height: 100%;
      padding: 1rem 3rem;
      background-color: var(--sapBackgroundColor);
    }

    .filter {
      margin-bottom: 1rem;
      margin-top: 1rem;
      
      :not(:first-child) {
        margin-left: 1rem;
      }
    }
  `,
  imports: [
    ProductTableComponent,
  ]
})
export class ProductListComponent {
}

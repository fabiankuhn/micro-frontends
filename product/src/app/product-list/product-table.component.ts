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

@Component({
  selector: 'app-product-table',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <ui5-table
        id="table-10"
        sticky-column-header=""
        data-sap-ui-fastnavgroup="true"
    >
      <ui5-table-row slot="default-1" forced-tab-index="0">
        <ui5-table-cell slot="default-1">
          <span>Notebook Basic 15</span>
        </ui5-table-cell>
        <ui5-table-cell slot="default-2">
          <span>Very Best Screens</span>
        </ui5-table-cell>
        <ui5-table-cell style="text-align: right" slot="default-3">
          <span>30 x 18 x 3cm</span>
        </ui5-table-cell>
        <ui5-table-cell style="text-align: right" slot="default-4">
          <span style="color: #2b7c2b">
            <b style="padding-right: 0.125rem">4.2</b>
            KG
          </span>
        </ui5-table-cell>
        <ui5-table-cell
            style="text-align: right"
            last-in-row=""
            slot="default-5"
        >
          <span>
            <b style="padding-right: 0.125rem">956</b>
            EUR
          </span>
        </ui5-table-cell>
      </ui5-table-row>
      <ui5-table-row slot="default-2">
        <ui5-table-cell slot="default-1">
          <span>Notebook Basic 175</span>
        </ui5-table-cell>
        <ui5-table-cell slot="default-2">
          <span>Very Best Screens</span>
        </ui5-table-cell>
        <ui5-table-cell style="text-align: right" slot="default-3">
          <span>29 x 17 x 3.1cm</span>
        </ui5-table-cell>
        <ui5-table-cell style="text-align: right" slot="default-4">
          <span style="color: #2b7c2b">
            <b style="padding-right: 0.125rem">4.5</b>
            KG
          </span>
        </ui5-table-cell>
        <ui5-table-cell
            style="text-align: right"
            last-in-row=""
            slot="default-5"
        >
          <span>
            <b style="padding-right: 0.125rem">1249</b>
            EUR
          </span>
        </ui5-table-cell>
      </ui5-table-row>
      <ui5-table-row slot="default-3">
        <ui5-table-cell slot="default-1">
          <span>Notebook Basic 18</span>
        </ui5-table-cell>
        <ui5-table-cell slot="default-2">
          <span>Very Best Screens</span>
        </ui5-table-cell>
        <ui5-table-cell style="text-align: right" slot="default-3">
          <span>28 x 19 x 2.5cm</span>
        </ui5-table-cell>
        <ui5-table-cell style="text-align: right" slot="default-4">
          <span style="color: #2b7c2b">
            <b style="padding-right: 0.125rem">4.2</b>
            KG
          </span>
        </ui5-table-cell>
        <ui5-table-cell
            style="text-align: right"
            last-in-row=""
            slot="default-5"
        >
          <span>
            <b style="padding-right: 0.125rem">1570</b>
            EUR
          </span>
        </ui5-table-cell>
      </ui5-table-row>
      <ui5-table-row slot="default-4">
        <ui5-table-cell slot="default-1">
          <span>Notebook Basic 19</span>
        </ui5-table-cell>
        <ui5-table-cell slot="default-2">
          <span>Smartcards</span>
        </ui5-table-cell>
        <ui5-table-cell style="text-align: right" slot="default-3">
          <span>32 x 21 x 4cm</span>
        </ui5-table-cell>
        <ui5-table-cell style="text-align: right" slot="default-4">
          <span style="color: #2b7c2b">
            <b style="padding-right: 0.125rem">4.2</b>
            KG
          </span>
        </ui5-table-cell>
        <ui5-table-cell
            style="text-align: right"
            last-in-row=""
            slot="default-5"
        >
          <span>
            <b style="padding-right: 0.125rem">1650</b>
            EUR
          </span>
        </ui5-table-cell>
      </ui5-table-row>

      <ui5-table-column slot="columns-1" first="">
        <span>Product</span>
      </ui5-table-column>
      <ui5-table-column slot="columns-2" min-width="800">
        <span>Supplier</span>
      </ui5-table-column>
      <ui5-table-column
          slot="columns-3"
          min-width="600"
          popin-text="Dimensions"
          demand-popin=""
          class="table-header-text-alignment"
      >
        <span>Dimensions</span>
      </ui5-table-column>
      <ui5-table-column
          slot="columns-4"
          min-width="600"
          popin-text="Weight"
          demand-popin=""
          class="table-header-text-alignment"
      >
        <span>Weight</span>
      </ui5-table-column>
      <ui5-table-column
          slot="columns-5"
          class="table-header-text-alignment"
          last=""
      >
        <span>Price</span>
      </ui5-table-column>
    </ui5-table>
  `,
})
export class ProductTableComponent {
}

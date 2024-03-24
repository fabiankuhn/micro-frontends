import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import "@ui5/webcomponents/dist/Card";
import "@ui5/webcomponents/dist/CardHeader.js";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-maintenance',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    NgForOf
  ],
  template: `
    <ui5-card *ngFor="let item of [].constructor(10); let i = index">
      <ui5-card-header slot="header" title-text="Maintenance Order" subtitle-text="Subtitle" status="3 of 15">
      </ui5-card-header>
      <style>
        .status-error {
          color: #b00;
        }

        .status-warning {
          color: #e9730c;
        }

        .status-success {
          color: #107e3e;
        }
      </style>
      <ui5-table style="margin-block-end: 0.75rem;">
        <ui5-table-column slot="columns">
          <ui5-label>Maintenance Order {{i}}</ui5-label>
        </ui5-table-column>
        <ui5-table-column slot="columns">
          <ui5-label>Customer</ui5-label>
        </ui5-table-column>
        <ui5-table-column slot="columns">
          <ui5-label>Net Amount</ui5-label>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="450" popin-text="Status" demand-popin>
          <ui5-label>Status</ui5-label>
        </ui5-table-column>
        <ui5-table-row>
          <ui5-table-cell>
            <ui5-label>5000010050</ui5-label>
          </ui5-table-cell>
          <ui5-table-cell>
            <ui5-label>Entertainment Argentina</ui5-label>
          </ui5-table-cell>
          <ui5-table-cell>
            <ui5-label>6k USD</ui5-label>
          </ui5-table-cell>
          <ui5-table-cell>
            <span class="status-success">Approved</span>
          </ui5-table-cell>
        </ui5-table-row>
        <ui5-table-row>
          <ui5-table-cell>
            <ui5-label>5000010051</ui5-label>
          </ui5-table-cell>
          <ui5-table-cell>
            <ui5-label>Brazil Technologies</ui5-label>
          </ui5-table-cell>
          <ui5-table-cell>
            <ui5-label>2k USD</ui5-label>
          </ui5-table-cell>
          <ui5-table-cell>
            <span class="status-error">Rejected</span>
          </ui5-table-cell>
        </ui5-table-row>
        <ui5-table-row>
          <ui5-table-cell>
            <ui5-label>5000010052</ui5-label>
          </ui5-table-cell>
          <ui5-table-cell>
            <ui5-label>Robert Brown Ent.</ui5-label>
          </ui5-table-cell>
          <ui5-table-cell>
            <ui5-label>17k USD</ui5-label>
          </ui5-table-cell>
          <ui5-table-cell>
            <span class="status-warning">Pending</span>
          </ui5-table-cell>
        </ui5-table-row>
      </ui5-table>
    </ui5-card>
  `,
  styles: `
      :host {
          padding: 1rem;
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          grid-auto-rows: max(360px, 1fr);
      }
  `
})
export class MaintenanceComponent {
}

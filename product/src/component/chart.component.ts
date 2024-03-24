import {Component, CUSTOM_ELEMENTS_SCHEMA, Input} from '@angular/core';
import {EChartsOption} from 'echarts';
import {NgxEchartsDirective, provideEcharts} from "ngx-echarts";
import "@ui5/webcomponents/dist/Card";
import "@ui5/webcomponents/dist/CardHeader.js"
import "@ui5/webcomponents/dist/Icon.js"

@Component({
    selector: 'app-chart',
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    template: `
        <ui5-card>
            <ui5-card-header slot="header" title-text="Product Sales" [subtitleText]="someString">
            </ui5-card-header>
            <div echarts [options]="chartOption" class="demo-chart"></div>
        </ui5-card>
    `,
    imports: [
        NgxEchartsDirective,
    ],
    providers: [
        provideEcharts(),
    ]
})
export class ChartComponent {
    @Input() someString?: string;

    chartOption: EChartsOption = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
            },
        ],
    };
}

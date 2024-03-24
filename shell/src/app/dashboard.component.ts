import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ModuleFederationToolsModule, WebComponentWrapperOptions} from "@angular-architects/module-federation-tools";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [ModuleFederationToolsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    template: `
        <ui5-button (click)="changeText()">Update Widgets</ui5-button>
        
        <div class="grid">
            <mft-wc-wrapper [options]="item" [props]="webComponentProps"></mft-wc-wrapper>
            <ng-container #chartComponent></ng-container>
        </div>
    `,
    styles: `
        .grid {
            margin-top: 1rem;
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            grid-auto-rows: max(360px, 1fr);
        }
    `,
})
export class DashboardComponent implements  OnInit{
    instance?: any;

    @ViewChild('chartComponent', { read: ViewContainerRef })
    viewContainer!: ViewContainerRef;

    async ngOnInit()  {
        const m = await import('product/chart');
        this.viewContainer.clear();
        this.instance = this.viewContainer.createComponent(m.ChartComponent).instance;
        this.instance.someString = "Hi from shell"
    }
    item: WebComponentWrapperOptions = {
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName: 'productComponent',
        exposedModule: './timeline',
        elementName: 'mf-timeline'
    }

    webComponentProps = {
        inputText: "Hi from shell"
    }

    changeText() {
        if(this.instance){
            this.instance.someString = 'Changed by shell';
        }

        this.webComponentProps = {
            ...this.webComponentProps,
            inputText: "Changed by Shell"
        }
    }
}

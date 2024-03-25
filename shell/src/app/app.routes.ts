import {Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {WebComponentWrapper, WebComponentWrapperOptions} from "@angular-architects/module-federation-tools";

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'product',
        loadChildren: () => import('product/routes').then(m => m.routes)
    },
    {
        path: 'test',
        component: WebComponentWrapper,
        data: {
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            remoteName: 'productComponent',
            exposedModule: './test',
            elementName: 'mf-test'
        } as WebComponentWrapperOptions
    },
];

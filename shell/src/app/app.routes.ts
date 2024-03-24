import {Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'product',
        loadChildren: () => import('product/routes').then(m => m.routes)
    }
];

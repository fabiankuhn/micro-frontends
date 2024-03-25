import {Routes} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {MaintenanceComponent} from "./maintenance/maintenance.component";
import {ProductComponent} from "./product.component";

export const routes: Routes = [
    {
        path: '',
        component: ProductComponent,
        children: [
            {
                path: '',
                redirectTo: 'product-list',
                pathMatch: 'full'
            },
            {
                path: 'product-list',
                component: ProductListComponent,
            },
            {
                path: 'maintenance',
                component: MaintenanceComponent
            }
        ]
    }
];

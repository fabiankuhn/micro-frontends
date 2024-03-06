import {Routes} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";

export const routes: Routes = [
    {
        path: '',
        component: ProductListComponent,
        pathMatch: 'full'
    },
];

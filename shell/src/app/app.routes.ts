import {loadRemoteModule} from '@angular-architects/module-federation';
import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: 'client1',
        loadChildren: () =>
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                exposedModule: './routes'
            }).then(m => m.routes)
    }
];

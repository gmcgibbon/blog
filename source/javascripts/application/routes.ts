import { Routes }          from '@angular/router';
import { BlogComponent }   from '../blog/component';
import { BlogGetResolver } from '../blog/get_resolver';

export const ROUTES: Routes = [
  {
    path: '',
    component: BlogComponent,
    resolve: {
      blog: BlogGetResolver
    }
  }
]

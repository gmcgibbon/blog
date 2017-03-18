import { Routes }               from '@angular/router';
import { BLOG_ROUTES }          from '../blog/routes';
import { ApplicationComponent } from './component';

export const ROUTES: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children:  BLOG_ROUTES
  }
]

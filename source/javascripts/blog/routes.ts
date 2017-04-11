import { Routes }            from '@angular/router';
import { ARTICLE_ROUTES }    from '../article/routes';
import { BlogComponent }     from './component';
import { BlogGetResolver }   from './get_resolver';
import { AuthorGetResolver } from '../author/get_resolver';

export const BLOG_ROUTES: Routes = [
  {
    path: '',
    component: BlogComponent,
    resolve: {
      author: AuthorGetResolver,
      blog:   BlogGetResolver
    },
    children: ARTICLE_ROUTES
  }
]

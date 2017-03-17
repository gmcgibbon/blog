import { Routes }               from '@angular/router';
import { BlogComponent }        from '../blog/component';
import { BlogGetResolver }      from '../blog/get_resolver';
import { ArticleListComponent } from '../article/list/component';
import { ArticleQueryResolver } from '../article/query_resolver';

export const ROUTES: Routes = [
  {
    path: '',
    component: BlogComponent,
    resolve: {
      blog: BlogGetResolver
    },
    children: [
      {
        path: '',
        component: ArticleListComponent,
        resolve: {
          articles: ArticleQueryResolver
        }
      }
    ]
  }
]

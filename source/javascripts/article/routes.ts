import { Routes }                 from '@angular/router';
import { ArticleListComponent }   from './list/component';
import { ArticleQueryResolver }   from './query_resolver';
import { ArticleDetailComponent } from './detail/component';
import { ArticleGetResolver }     from './get_resolver';

export const ARTICLE_ROUTES: Routes = [
  {
    path: '',
    component: ArticleListComponent,
    resolve: {
      articles: ArticleQueryResolver
    }
  },
  {
    path: ':id',
    component: ArticleDetailComponent,
    resolve: {
      articles: ArticleQueryResolver,
      article:  ArticleGetResolver
    }
  }
]

import { Routes }               from '@angular/router';
import { ArticleListComponent } from './list/component';
import { ArticleQueryResolver } from './query_resolver';

export const ARTICLE_ROUTES: Routes = [
  {
    path: '',
    component: ArticleListComponent,
    resolve: {
      articles: ArticleQueryResolver
    }
  }
]

import { Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/blog-overview/blog-overview.routes').then(
        (m) => m.blogOverviewRoutes,
      ),
  },
  {
    path: 'blog/:id',
    loadChildren: () =>
      import('./components/blog-detail/blog-detail.routes').then(
        (m) => m.blogDetailRoutes,
      ),
  },
  {
    path: 'add-blog',
    loadChildren: () =>
      import('./components/add-blog-page/add-blog-page.module').then(
        (m) => m.AddBlogPageModule,
      ),
  },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error', pathMatch: 'full' },
];

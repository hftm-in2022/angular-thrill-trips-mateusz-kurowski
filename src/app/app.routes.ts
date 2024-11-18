import { Routes } from '@angular/router';

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
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

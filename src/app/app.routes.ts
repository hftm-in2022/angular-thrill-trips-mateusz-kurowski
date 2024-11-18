import { Routes } from '@angular/router';
import { BlogOverviewComponent } from './blog-overview/blog-overview.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: BlogOverviewComponent,
  },
  {
    path: 'blog/:id',
    component: BlogDetailComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

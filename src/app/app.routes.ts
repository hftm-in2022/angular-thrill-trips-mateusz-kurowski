import { Routes } from '@angular/router';
import { BlogOverviewComponent } from './components/blog-overview/blog-overview.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';

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

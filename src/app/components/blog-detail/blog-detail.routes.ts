import { Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail.component';
import { BlogDetailResolver } from '../../core/services/blog-detail-resolver.service';

export const blogDetailRoutes: Routes = [
  {
    path: '',
    component: BlogDetailComponent,
    resolve: { blog: BlogDetailResolver },
  },
];

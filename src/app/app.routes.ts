import { Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

export const routes: Routes = [
  { path: 'blog/:id', component: BlogDetailComponent },
];

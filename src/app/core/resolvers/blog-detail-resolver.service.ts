import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BlogPost } from '../models/blog-post.model';
import { BlogService } from '../services/blog.service';

@Injectable({
  providedIn: 'root',
})
export class BlogDetailResolver implements Resolve<BlogPost | null> {
  constructor(private blogService: BlogService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<BlogPost | null> {
    const blogId = route.paramMap.get('id');

    if (blogId) {
      return this.blogService.getPostId(blogId).pipe(
        catchError((error) => {
          console.error('Error fetching blog details:', error);
          return of(null);
        }),
      );
    }

    return of(null);
  }
}

import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, finalize, Observable, tap } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';

interface BlogPostResponse {
  data: BlogPost[];
  maxPageSize: number;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl =
    'https://d-cap-blog-backend---v2.whitepond-b96fee4b.westeurope.azurecontainerapps.io/entries';

  blogs$ = new BehaviorSubject<BlogPost[]>([]);
  loading = signal(false);

  constructor(private http: HttpClient) {}

  getPosts(): Observable<BlogPostResponse> {
    this.loading.set(true);
    return this.http.get<BlogPostResponse>(this.apiUrl).pipe(
      tap((response) => this.blogs$.next(response.data)),
      finalize(() => this.loading.set(false)),
    );
  }

  getPostId(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.apiUrl}/${id}`);
  }
}
export type { BlogPost };

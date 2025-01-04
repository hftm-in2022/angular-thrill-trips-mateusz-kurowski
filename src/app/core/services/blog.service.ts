import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, finalize, Observable, switchMap, tap } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { OidcSecurityService } from 'angular-auth-oidc-client';

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
  httpClient = inject(HttpClient);
  private oidcSecurityService = inject(OidcSecurityService);
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

  savePost(blog: {
    title: string;
    content: string;
    headerImageUrl?: string;
  }): Observable<BlogPost> {
    return this.oidcSecurityService.getAccessToken().pipe(
      switchMap((token) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
        });
        return this.httpClient.post<BlogPost>(this.apiUrl, blog, { headers });
      }),
    );
  }
}

export type { BlogPost };

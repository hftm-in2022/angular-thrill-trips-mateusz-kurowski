import { TestBed } from '@angular/core/testing';
import { BlogService } from './blog.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { BlogPost } from '../models/blog-post.model';
import { of } from 'rxjs';

describe('BlogService', () => {
  let service: BlogService;
  let httpMock: HttpTestingController;
  let oidcSecurityService: jasmine.SpyObj<OidcSecurityService>;

  const mockPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Test Blog 1',
      author: 'Author 1',
      content: 'Content 1',
      contentPreview: 'Preview 1',
      headerImageUrl: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      likes: 10,
      comments: [],
      createdByMe: false,
      likedByMe: false,
    },
  ];

  const mockResponse = {
    data: mockPosts,
    maxPageSize: 50,
    pageIndex: 1,
    pageSize: 10,
    totalCount: 100,
  };

  beforeEach(() => {
    const oidcSpy = jasmine.createSpyObj('OidcSecurityService', [
      'getAccessToken',
    ]);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: OidcSecurityService, useValue: oidcSpy }],
    });

    service = TestBed.inject(BlogService);
    httpMock = TestBed.inject(HttpTestingController);
    oidcSecurityService = TestBed.inject(
      OidcSecurityService,
    ) as jasmine.SpyObj<OidcSecurityService>;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch posts and update blogs$', (done) => {
    service.getPosts().subscribe((response) => {
      expect(response).toEqual(mockResponse);
      expect(service.blogs$.value).toEqual(mockPosts);
      done();
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch a single post by ID', (done) => {
    const postId = '1';
    service.getPostId(postId).subscribe((post) => {
      expect(post).toEqual(mockPosts[0]);
      done();
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/${postId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts[0]);
  });

  it('should save a post with a token', (done) => {
    const newPost = { title: 'New Blog', content: 'Content of new blog' };
    const mockToken = 'mock-token';
    const createdPost: BlogPost = {
      ...newPost,
      id: 2,
      headerImageUrl: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      author: 'Test Author',
      likes: 0,
      comments: [],
      createdByMe: true,
      likedByMe: false,
    };

    oidcSecurityService.getAccessToken.and.returnValue(of(mockToken));

    service.savePost(newPost).subscribe((post) => {
      expect(post).toEqual(createdPost);
      done();
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Authorization')).toBe(
      `Bearer ${mockToken}`,
    );
    req.flush(createdPost);
  });
});

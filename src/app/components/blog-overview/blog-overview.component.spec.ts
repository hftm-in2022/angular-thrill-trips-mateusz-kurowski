import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogOverviewComponent } from './blog-overview.component';
import { BlogService } from '../../core/services/blog.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { BlogPost } from '../../core/models/blog-post.model';
import { signal } from '@angular/core';

describe('BlogOverviewComponent', () => {
  let component: BlogOverviewComponent;
  let fixture: ComponentFixture<BlogOverviewComponent>;
  let blogService: jasmine.SpyObj<BlogService>;
  let router: jasmine.SpyObj<Router>;

  const mockBlogs: BlogPost[] = [
    {
      id: 1,
      title: 'Test Blog 1',
      author: 'Author 1',
      content: 'Content 1',
      contentPreview: 'Preview 1',
      headerImageUrl: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      likes: 5,
      comments: [],
      createdByMe: false,
      likedByMe: false,
    },
    {
      id: 2,
      title: 'Test Blog 2',
      author: 'Author 2',
      content: 'Content 2',
      contentPreview: 'Preview 2',
      headerImageUrl: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      likes: 10,
      comments: [],
      createdByMe: true,
      likedByMe: true,
    },
  ];

  const mockBlogResponse = {
    data: mockBlogs,
    pageIndex: 1,
    pageSize: 10,
    totalCount: 20,
    maxPageSize: 50,
  };

  beforeEach(async () => {
    const mockLoadingSignal = signal(false);

    blogService = jasmine.createSpyObj('BlogService', ['getPosts']);
    blogService.getPosts.and.returnValue(of(mockBlogResponse));
    Object.defineProperty(blogService, 'loading', {
      value: mockLoadingSignal,
    });

    router = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [BlogOverviewComponent],
      providers: [
        { provide: BlogService, useValue: blogService },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch blog posts on init', () => {
    expect(blogService.getPosts).toHaveBeenCalled();
    expect(component.blogs()).toEqual(mockBlogs);
  });

  it('should display an error message if blog posts cannot be fetched', () => {
    const errorMessage = 'Failed to load blogs. Please try again later.';
    blogService.getPosts.and.returnValue(
      throwError(() => new Error(errorMessage)),
    );

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.error()).toBe(errorMessage);
  });

  it('should navigate to the selected blog on viewBlog', () => {
    component.viewBlog(1);
    expect(router.navigate).toHaveBeenCalledWith(['/blog', 1]);
  });

  it('should set loading to true while fetching blog posts', () => {
    spyOn(blogService.loading, 'set');
    component.ngOnInit();
    fixture.detectChanges();

    expect(blogService.loading.set).toHaveBeenCalledWith(true);
  });

  it('should set loading to false after blog posts are fetched', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(blogService.loading()).toBe(false);
  });

  it('should set loading to false if fetching blog posts fails', () => {
    blogService.getPosts.and.returnValue(throwError(() => new Error('Error')));
    component.ngOnInit();
    expect(blogService.loading()).toBe(false);
  });
});

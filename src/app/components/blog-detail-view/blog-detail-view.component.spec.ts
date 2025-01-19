import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';
import { BlogPost } from '../../core/models/blog-post.model';
import { Router, ActivatedRoute } from '@angular/router';

describe('BlogDetailComponent', () => {
  let component: BlogDetailComponent;
  let fixture: ComponentFixture<BlogDetailComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;

  const mockBlog: BlogPost = {
    id: 1,
    title: 'Sample Blog Title',
    author: 'John Doe',
    content: 'This is the blog content.',
    headerImageUrl: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    likes: 5,
    comments: [
      {
        id: 1,
        author: 'Commenter 1',
        content: 'Great post!',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    createdByMe: false,
    likedByMe: false,
  };

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', [], {
      snapshot: { data: { blog: mockBlog } },
    });

    await TestBed.configureTestingModule({
      imports: [BlogDetailComponent], // Using standalone component
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Ensure the template is updated
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load blog data from the route snapshot', () => {
    expect(component.blog()).toEqual(mockBlog);
  });

  it('should navigate to overview when navigateToOverview is called', () => {
    component.navigateToOverview();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/overview']);
  });

  it('should display the blog title', () => {
    const titleElement = fixture.nativeElement.querySelector('h1');
    expect(titleElement.textContent).toContain(mockBlog.title);
  });

  it('should display the blog content', () => {
    const contentElement = fixture.nativeElement.querySelector(
      '.blog-detail-view > div',
    );
    expect(contentElement).toBeTruthy(); // Ensure it exists
    expect(contentElement.textContent).toContain(mockBlog.content); // Check content
  });

  it('should render comments if available', () => {
    const commentElements =
      fixture.nativeElement.querySelectorAll('.comment-card');
    expect(commentElements.length).toBe(mockBlog.comments.length);
    expect(commentElements[0].textContent).toContain(
      mockBlog.comments[0].content,
    );
  });

  it('should display a placeholder message if no comments are available', () => {
    // Modify the comments to simulate no comments
    component.blog.set({ ...mockBlog, comments: [] });
    fixture.detectChanges();

    const noCommentsMessage =
      fixture.nativeElement.querySelector('.no-comments');
    expect(noCommentsMessage.textContent).toContain(
      'Still waiting for comments 😉',
    );
  });
});

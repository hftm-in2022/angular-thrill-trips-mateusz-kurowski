import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { BlogPost } from '../models/blog-post.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-blog-overview',
  standalone: true,
  imports: [CommonModule, BlogCardComponent],
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss'],
})
export class BlogOverviewComponent implements OnInit {
  blogs: BlogPost[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private blogService: BlogService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadBlogs();
  }

  private loadBlogs(): void {
    this.loading = true;
    this.error = null;

    this.blogService.getPosts().subscribe({
      next: (response) => {
        console.log('API Response:', response);
        this.blogs = response.data || [];
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load blogs. Please try again later.';
        console.error(err);
        this.loading = false;
      },
    });
  }

  viewBlog(blogId: number): void {
    console.log('Navigating to blog:', blogId); // Add this log to verify the method is called
    this.router.navigate(['/blog', blogId]); // Navigate to the detail page
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { BlogService } from '../../core/services/blog.service';
import { BlogPost } from '../../core/models/blog-post.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-blog-overview',
  standalone: true,
  imports: [CommonModule, BlogCardComponent],
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogOverviewComponent implements OnInit {
  blogs = signal<BlogPost[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(
    public blogService: BlogService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.blogService.loading.set(true);
    this.blogService.getPosts().subscribe({
      next: (response) => {
        this.blogs.set(response.data || []);
        this.blogService.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load blogs. Please try again later.');
        console.error(err);
        this.blogService.loading.set(false);
      },
    });
  }

  viewBlog(blogId: number): void {
    console.log('Navigating to blog:', blogId);
    this.router.navigate(['/blog', blogId]);
  }
}

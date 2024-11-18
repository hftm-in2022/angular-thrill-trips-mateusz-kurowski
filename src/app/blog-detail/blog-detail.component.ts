import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { BlogPost } from '../models/blog-post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  blog: BlogPost | null = null;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
  ) {}

  ngOnInit(): void {
    const blogId = this.route.snapshot.paramMap.get('id');
    console.log('Blog ID from route:', blogId);

    if (blogId) {
      this.blogService.getPostId(blogId).subscribe({
        next: (blog) => {
          console.log('Fetched Blog:', blog);
          this.blog = blog;
        },
        error: (err) => console.error('Error loading blog details:', err),
      });
    }
  }
}
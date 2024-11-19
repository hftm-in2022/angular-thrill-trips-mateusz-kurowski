import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../../core/models/blog-post.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BlogDetailViewComponent } from '../blog-detail-view/blog-detail-view.component';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule, BlogDetailViewComponent],
  standalone: true,
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  blog: BlogPost | null = null;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.blog = this.route.snapshot.data['blog'];

    if (!this.blog) {
      this.error =
        'No blog data found. The blog you search for may have been deleted or does not exist anymore.';
      console.error('No blog data found.');
    }
  }

  navigateToOverview(): void {
    console.log('Navigating to overview...');
    this.router.navigate(['/']);
  }
}

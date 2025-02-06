import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogDetailComponent implements OnInit {
  blog = signal<BlogPost | undefined>(undefined);
  error = signal<string | undefined>(undefined);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const blogData = this.route.snapshot.data['blog']; // provideRouter(routes, withComponentInputBinding()) would set the route data from resolver directly to an inupt
    if (!blogData) {
      this.error.set(
        'No blog data found. The blog you searched for may have been deleted or does not exist anymore.',
      );
      console.error('No blog data found.');
    } else {
      this.blog.set(blogData);
    }
  }

  navigateToOverview(): void {
    console.log('Navigating to overview...'); // no logs in production code
    this.router.navigate(['/overview']);
  }
}

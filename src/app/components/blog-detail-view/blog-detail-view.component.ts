import { Component, Input } from '@angular/core';
import { BlogPost } from '../../core/models/blog-post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail-view.component.html',
  styleUrls: ['./blog-detail-view.component.scss'],
})
export class BlogDetailViewComponent {
  @Input() blog!: BlogPost;
}

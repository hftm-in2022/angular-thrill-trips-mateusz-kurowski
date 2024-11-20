import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { BlogPost } from '../../core/models/blog-post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogCardComponent {
  blog = input<BlogPost>();
  blogSelected = output<number>();

  onCardClick(): void {
    const currentBlog = this.blog();
    if (currentBlog) {
      this.blogSelected.emit(currentBlog.id);
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.onCardClick();
      event.preventDefault();
    }
  }
}

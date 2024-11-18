import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlogPost } from '../../core/models/blog-post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  @Input() blog!: BlogPost;
  @Output() blogSelected = new EventEmitter<number>();

  onCardClick(): void {
    this.blogSelected.emit(this.blog.id);
  }
}

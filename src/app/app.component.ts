import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPost } from './models/blog-post.model';
import { BlogService } from './services/blog.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet],
})
export class AppComponent implements OnInit {
  posts: BlogPost[] | undefined;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getPosts().subscribe(
      (response) => {
        this.posts = response.data;
        console.log(this.posts);
      },
      (error) => {
        console.error('Error fetching posts:', error);
      },
    );
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPost } from './core/models/blog-post.model';
import { BlogService } from './core/services/blog.service';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
})
export class AppComponent implements OnInit, OnDestroy {
  posts: BlogPost[] | undefined;
  private subscription = new Subscription();

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    const sub = this.blogService.getPosts().subscribe(
      // why not use a resolver?
      (response) => {
        this.posts = response.data;
        console.log(this.posts);
      },
      (error) => {
        console.error('Error fetching posts:', error);
      },
    );
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

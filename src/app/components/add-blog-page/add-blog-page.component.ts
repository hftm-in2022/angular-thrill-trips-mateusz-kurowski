import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { BlogService } from '../../core/services/blog.service';

@Component({
  selector: 'app-add-blog-page',
  templateUrl: './add-blog-page.component.html',
  styleUrls: ['./add-blog-page.component.scss'],
})
export class AddBlogPageComponent {
  blogForm: FormGroup;

  constructor(
    private form: FormBuilder,
    private blogService: BlogService,
    private router: Router,
  ) {
    this.blogForm = this.form.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      headerImageUrl: [''],
    });
  }

  get title() {
    return this.blogForm.get('title');
  }

  get content() {
    return this.blogForm.get('content');
  }

  onSubmit(): void {
    if (this.blogForm.valid) {
      const newBlog = this.blogForm.value;
      this.blogService.savePost(newBlog).subscribe({
        next: () => this.router.navigate(['']),
        error: (err) => console.error('Failed to create blog:', err),
      });
    }
  }

  navigateToHome(): void {
    console.log('Navigating to home...');
    this.router.navigate(['/overview']);
  }
}

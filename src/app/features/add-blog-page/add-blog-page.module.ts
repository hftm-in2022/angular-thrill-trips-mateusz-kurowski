import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddBlogPageComponent } from './add-blog-page.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AddBlogPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AddBlogPageComponent }]),
  ],
})
export class AddBlogPageModule {}

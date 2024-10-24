import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [FormsModule, MatButtonModule, CommonModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title = 'Thrill Trips by Mateusz Kurowski';
  name = '';

  trips = [
    { imageUrl: '/images/thrill-trips.jpg', activity: 'Hiking' },
    { imageUrl: '/images/thrill-trips1.jpg', activity: 'Motocross' },
    { imageUrl: '/images/thrill-trips2.jpg', activity: 'Snowboarding' },
  ];

  currentImageIndex = 0;
  imageUrl = this.trips[this.currentImageIndex].imageUrl;
  currentActivity = this.trips[this.currentImageIndex].activity;

  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.trips.length;
    this.imageUrl = this.trips[this.currentImageIndex].imageUrl;
    this.currentActivity = this.trips[this.currentImageIndex].activity;
  }

  onLogoClicked() {
    alert('You clicked my Logo!🍾');
  }

  onKeyUp(newName: string) {
    this.name = newName;
  }

  onLogoKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onLogoClicked();
    }
  }
}

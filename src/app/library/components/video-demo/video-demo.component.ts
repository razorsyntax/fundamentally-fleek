import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-demo.component.html',
  styleUrls: ['./video-demo.component.scss']
})
export class VideoDemoComponent {
  playVideo() {
    // Implement video play functionality
    console.log('Play video');
  }
}

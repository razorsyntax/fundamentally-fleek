import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoModalComponent } from './components/video-modal/video-modal.component';
import { VideoConfig } from './models/video.interface';
import { VideoButtonDirective } from './directives/video-button.directive';

@Component({
  selector: 'app-video-demo',
  standalone: true,
  imports: [CommonModule, VideoModalComponent, VideoButtonDirective],
  templateUrl: './video-demo.component.html',
  styleUrls: ['./video-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoDemoComponent {
  videoConfig: VideoConfig = {
    id: 'R9rwfUmJaAM',
    platform: 'youtube',  // or 'odysee'
    title: 'Investment Strategy Demo'
  };
}

import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoConfig } from '../../models/video.interface';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() config!: VideoConfig;
  videoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.getVideoUrl(this.config)
    );
  }

  private getVideoUrl(config: VideoConfig): string {
    switch (config.platform) {
      case 'youtube':
        return `https://www.youtube-nocookie.com/embed/${config.id}?controls=1&rel=0`;
      case 'odysee':
        return `https://odysee.com/$/embed/${config.id}`;
      default:
        throw new Error('Unsupported video platform');
    }
  }
}

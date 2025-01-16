import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { ModalService } from '../../service/modal.service';
import { fadeAnimation } from '../../animations/fade.animation';

@Component({
  selector: 'app-video-modal',
  standalone: true,
  imports: [CommonModule, VideoPlayerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss']
})
export class VideoModalComponent {
  constructor(public modalService: ModalService) {}

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.modalService.close();
    }
  }

  @HostListener('window:keyup.escape')
  onEscapePress(): void {
    this.modalService.close();
  }
}

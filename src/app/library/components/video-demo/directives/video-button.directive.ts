import { Directive, HostListener, Input } from '@angular/core';
import { VideoConfig } from '../models/video.interface';
import { ModalService } from '../service/modal.service';

@Directive({
  selector: '[appVideoButton]',
  standalone: true
})
export class VideoButtonDirective {
  @Input('appVideoButton') videoConfig!: VideoConfig;

  constructor(private modalService: ModalService) {}

  @HostListener('click')
  onClick(): void {
    this.modalService.open(this.videoConfig);
  }

  @HostListener('keydown.enter')
  @HostListener('keydown.space')
  onKeyPress(event: KeyboardEvent): void {
    event.preventDefault();
    this.modalService.open(this.videoConfig);
  }
}

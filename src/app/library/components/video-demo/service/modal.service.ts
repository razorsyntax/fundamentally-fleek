import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { VideoConfig } from '../models/video.interface';
import { ScrollLockService } from './scroll-lock.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private isVisibleSubject = new BehaviorSubject<boolean>(false);
  private videoConfigSubject = new BehaviorSubject<VideoConfig | null>(null);

  isVisible$: Observable<boolean> = this.isVisibleSubject.asObservable();
  videoConfig$: Observable<VideoConfig | null> = this.videoConfigSubject.asObservable();

  constructor(private scrollLockService: ScrollLockService) {}

  open(config: VideoConfig): void {
    this.videoConfigSubject.next(config);
    this.isVisibleSubject.next(true);
    this.scrollLockService.lock();
  }

  close(): void {
    this.isVisibleSubject.next(false);
    this.videoConfigSubject.next(null);
    this.scrollLockService.unlock();
  }
}

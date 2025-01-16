import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollLockService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  lock(): void {
    this.renderer.addClass(document.body, 'scroll-locked');
  }

  unlock(): void {
    this.renderer.removeClass(document.body, 'scroll-locked');
  }
}

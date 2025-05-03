import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-final-cta',
    imports: [CommonModule],
    templateUrl: './final-cta.component.html',
    styleUrls: ['./final-cta.component.scss']
})
export class FinalCtaComponent {
  scrollToSignup() {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}

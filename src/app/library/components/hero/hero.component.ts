import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  scrollToSignup() {
    // Implementation for smooth scroll to signup section
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}

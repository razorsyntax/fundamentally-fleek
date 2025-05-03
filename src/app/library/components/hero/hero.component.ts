import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
    selector: 'app-hero-section',
    imports: [CommonModule],
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  utilities = inject(UtilitiesService);
  price = this.utilities.getAnnualPrice();
  
  scrollToSignup() {
    // Implementation for smooth scroll to signup section
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}

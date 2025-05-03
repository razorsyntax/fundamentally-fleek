import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
    selector: 'app-final-cta',
    imports: [CommonModule],
    templateUrl: './final-cta.component.html',
    styleUrls: ['./final-cta.component.scss']
})
export class FinalCtaComponent {
  utilities = inject(UtilitiesService);
  price = this.utilities.getAnnualPrice();

  scrollToSignup() {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}

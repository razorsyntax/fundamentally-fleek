import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesService } from '../../services/utilities.service';
import { Router, RouterModule } from '@angular/router';
@Component({
    selector: 'app-hero-section',
    imports: [CommonModule, RouterModule],
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  utilities = inject(UtilitiesService);
  price = this.utilities.getMonthlyPrice();
  router = inject(Router);

  navigateToPurchaseOptions() {
    this.router.navigate(['/purchase-options']);
  }
}

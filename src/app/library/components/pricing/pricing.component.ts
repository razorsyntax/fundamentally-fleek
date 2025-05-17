import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesService } from '../../services/utilities.service';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-pricing',
    imports: [CommonModule, RouterModule],
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  utilities = inject(UtilitiesService);
  router = inject(Router);
  features = [
    'Access to all core features',
    'Analysis Builder with custom templates',
    'Bet Size Manager',
    'Portfolio tracking and management',
    'Real-time market data',
    'Asset comparison tools',
    'Technical analysis integration',
    'Comprehensive research tools',
    'AI-Enhanced Summary Report'
  ];

  navigateToPurchaseOptions() {
    this.router.navigate(['/purchase-options']);
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
    selector: 'app-pricing',
    imports: [CommonModule],
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  utilities = inject(UtilitiesService);
  
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
}

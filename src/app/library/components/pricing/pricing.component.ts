import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
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

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../library/components/header/header.component';
import { FooterComponent } from '../library/components/footer/footer.component';

@Component({
  selector: 'app-purchase-options',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './purchase-options.component.html',
  styleUrls: ['./purchase-options.component.scss']
})
export class PurchaseOptionsComponent {
  readonly aquarianMetalsUrl = 'https://www.aquarianmetals.com';
  readonly activationUrl = 'https://crypto.fundamentally.app/redeem';
  readonly registerUrl = 'https://crypto.fundamentally.app/register';
  readonly loginUrl = 'https://crypto.fundamentally.app/login';

  readonly features = [
    { icon: '📊', text: 'Fundamental asset data for thousands of assets' },
    { icon: '📈', text: 'Make risk management decisions with confidence' },
    { icon: '📚', text: 'Compare assets using enhanced AI' },
    { icon: '✅', text: 'Custom evalautions for 100+ assets' },
    { icon: '🔒', text: 'Secure, privacy-focused platform' },
    { icon: '💻', text: 'Perform detailed technical analysis' }
  ];

  purchaseOptions = [
    {
      title: 'Monthly Plan (Recurring)',
      description: 'Billed monthly. Flexible subscription with automatic renewal.',
      icon: '📆',
      link: `${this.aquarianMetalsUrl}/product/fundamentally-monthly-subscription/`,
      renewal: 'Auto-renew',
      price: '$29.99/month'
    },
    {
      title: 'Annual Plan (Recurring)',
      description: 'Billed once per year. Enjoy uninterrupted access with automatic renewal.',
      icon: '📅',
      link: `${this.aquarianMetalsUrl}/product/fundamentally-annual-subscription/`,
      renewal: 'Auto-renew',
      price: '$239.88/year'
    },
    {
      title: 'Crypto Annual (One-Time)',
      description: 'Pay once for a full year using cryptocurrency. Manual renewal required after one year.',
      icon: '₿',
      link: `${this.aquarianMetalsUrl}/product/fundamentally-annual-subscription-crypto/`,
      renewal: 'Manual renewal',
      price: '$239.88/year'
    }
  ];
}

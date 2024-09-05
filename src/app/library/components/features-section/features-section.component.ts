import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Features {
  emoji: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesSectionComponent {
  features: Features[] = [
    {
      emoji: '📈💼',
      title: 'Portfolio Management',
      description:
        'Users can update and manage their holdings, including transactions, fees, taxes, and more.',
    },
    {
      emoji: '⏱️💻',
      title: 'Workflow Optimization',
      description:
        'All your research in one place for yourself or your entire team.',
    },
    {
      emoji: '🤔🔍',
      title: 'Asset Evaluation',
      description:
        'Customizable evaluation framework that allows users to create custom evaluations assess and compare assets.',
    },
    {
      emoji: '✅🔴',
      title: 'Quantifiable score',
      description:
        'Generate a quantifiable score to inform investment decisions, allowing users to make more informed decisions.',
    },
    {
      emoji: '🤖📊',
      title: 'AI Powered Reports',
      description:
        'Create custom watchlists to keep an eye on the cryptocurrencies that matter most to you.',
    },
  ];
}



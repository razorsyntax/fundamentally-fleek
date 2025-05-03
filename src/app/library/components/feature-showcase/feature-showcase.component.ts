import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-feature-showcase',
    imports: [CommonModule],
    templateUrl: './feature-showcase.component.html',
    styleUrls: ['./feature-showcase.component.scss']
})
export class FeatureShowcaseComponent {
  features = [
    {
      title: 'Your Portfolio\'s Control Center',
      description:
        'See exactly what\'s working, what isn\'t, and what needs your attention. No more wondering about the health of your investments.',
      image: '/assets/images/portfolio.webp',
      alt: 'Fundamentally\'s Professional Dashboard',
      points: [
        'Professional TA Tools',
        'Performance analytics',
        'Asset rebalancing tools',
      ],
    },
    {
      title: 'Find True Value',
      description:
        'While others chase headlines, you\'ll uncover which opportunities are worth your investment using a proven evaluation system.',
      image: '/assets/images/evaluationlist.webp',
      alt: 'Evaluate thousands of cryptocurrencies with our evaluation tools',
      points: [
        'Risk-based position sizing',
        'Portfolio balance tools',
        'Custom risk thresholds',
      ],
    },
    {
      title: 'Turn Market Chaos Into Clear Decisions',
      description:
        'Answer simple questions about any crypto opportunity and get a clear score that shows its true potential. No more wondering if you\'re missing something important.',
      image: '/assets/images/analysisbuilder.webp',
      alt: 'Custom templates let you get the edge to spot invest opportunities',
      points: [
        'Custom scoring templates',
        'Asset comparison tools',
        'Flexible evaluation criteria',
      ],
    },
  ];
}

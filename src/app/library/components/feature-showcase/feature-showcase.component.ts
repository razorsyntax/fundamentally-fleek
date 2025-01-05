import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-showcase.component.html',
  styleUrls: ['./feature-showcase.component.scss'],
})
export class FeatureShowcaseComponent {
  features = [
    {
      title: 'Portfolio Management',
      description:
        'Monitor, analyze, and optimize your portfolio with powerful tracking tools. Stay informed with real-time updates and comprehensive performance metrics.',
      image: '/assets/images/portfolio.webp',
      points: [
        'Professional TA Tools',
        'Performance analytics',
        'Asset rebalancing tools',
      ],
    },
    {
      title: 'Evaluation',
      description:
        'Take the guesswork out of position sizing. Use intelligent risk management tools to determine optimal investment amounts based on your evaluation scores.',
      image: '/assets/images/evaluationlist.webp',
      points: [
        'Risk-based position sizing',
        'Portfolio balance tools',
        'Custom risk thresholds',
      ],
    },
    {
      title: 'Analysis Builder',
      description:
        'Create custom evaluation frameworks that turn your research into quantifiable scores. Compare assets consistently and make informed decisions based on your criteria.',
      image: '/assets/images/analysisbuilder.webp',
      points: [
        'Custom scoring templates',
        'Asset comparison tools',
        'Flexible evaluation criteria',
      ],
    },
  ];
}

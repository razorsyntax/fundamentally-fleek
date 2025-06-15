import { Component, ChangeDetectionStrategy, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptimizedImageComponent } from '../../../shared/components/optimized-image/optimized-image.component';

interface ImageModalConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
}

@Component({
    selector: 'app-feature-showcase',
    standalone: true,
    imports: [CommonModule, OptimizedImageComponent],
    templateUrl: './feature-showcase.component.html',
    styleUrls: ['./feature-showcase.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureShowcaseComponent {
  protected readonly $isModalVisible = signal(false);
  protected readonly $modalConfig = signal<ImageModalConfig | null>(null);

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

  protected openModal(config: ImageModalConfig): void {
    this.$modalConfig.set(config);
    this.$isModalVisible.set(true);
    document.body.style.overflow = 'hidden';
  }

  protected closeModal(): void {
    this.$isModalVisible.set(false);
    this.$modalConfig.set(null);
    document.body.style.overflow = '';
  }

  protected onBackdropClick(event: MouseEvent): void {
    this.closeModal();
  }

  @HostListener('window:keyup.escape')
  protected onEscapePress(): void {
    if (this.$isModalVisible()) {
      this.closeModal();
    }
  }
}

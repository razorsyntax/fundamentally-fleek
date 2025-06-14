import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OptimizedImageComponent } from '../../../shared/components/optimized-image/optimized-image.component';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
	selector: 'app-hero-section',
	standalone: true,
	imports: [CommonModule, OptimizedImageComponent],
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
	private readonly utilities = inject(UtilitiesService);
	private readonly router = inject(Router);

	public readonly $price = signal(this.utilities.getMonthlyPrice());

	public navigateToPurchaseOptions(): void {
		this.router.navigate(['/purchase-options']);
	}

	public getAriaLabel(): string {
		return `Get started with Fundamentally for $${this.$price()} per month`;
	}
}

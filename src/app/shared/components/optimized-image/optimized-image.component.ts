import { Component, OnInit, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageOptimizationService, ResponsiveImage } from '../../../core/services/image-optimization.service';

@Component({
	selector: 'app-optimized-image',
	imports: [CommonModule],
	templateUrl: './optimized-image.component.html',
	styleUrls: ['./optimized-image.component.scss']
})
export class OptimizedImageComponent implements OnInit {
	private readonly imageOptimizationService = inject(ImageOptimizationService);

	public readonly src = input.required<string>({ alias: 'src' });
	public readonly alt = input.required<string>({ alias: 'alt' });
	public readonly width = input.required<number>({ alias: 'width' });
	public readonly height = input.required<number>({ alias: 'height' });
	public readonly loading = input<'lazy' | 'eager'>('lazy', { alias: 'loading' });
	public readonly fetchpriority = input<'high' | 'low' | 'auto'>('auto', { alias: 'fetchpriority' });
	public readonly className = input<string>('', { alias: 'class' });
	public readonly style = input<string>('', { alias: 'style' });
	public readonly objectFit = input<string>('cover', { alias: 'objectFit' });
	public readonly objectPosition = input<string>('center', { alias: 'objectPosition' });
	public readonly imgTransform = input<string>('', { alias: 'imgTransform' });
	public readonly overflow = input<string>('', { alias: 'overflow' });

	protected readonly $image = signal<ResponsiveImage>({
		src: '',
		srcset: '',
		sizes: '',
		alt: '',
		width: 0,
		height: 0,
		loading: 'lazy',
		fetchpriority: 'auto'
	});

	public ngOnInit(): void {
		this.$image.set(
			this.imageOptimizationService.generateResponsiveImage(
				this.src(),
				this.alt(),
				this.width(),
				this.height(),
				{
					loading: this.loading(),
					fetchpriority: this.fetchpriority()
				}
			)
		);
	}
} 
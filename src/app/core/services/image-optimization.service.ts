import { Injectable } from '@angular/core';

export interface ResponsiveImage {
	srcset: string;
	sizes: string;
	src: string;
	alt: string;
	width: number;
	height: number;
	loading?: 'lazy' | 'eager';
	fetchpriority?: 'high' | 'low' | 'auto';
}

@Injectable({
	providedIn: 'root'
})
export class ImageOptimizationService {
	private readonly breakpoints = {
		small: 480,
		medium: 768,
		large: 1024,
		xlarge: 1440
	};

	public generateResponsiveImage(
		basePath: string,
		alt: string,
		width: number,
		height: number,
		options: {
			loading?: 'lazy' | 'eager';
			fetchpriority?: 'high' | 'low' | 'auto';
			quality?: number;
		} = {}
	): ResponsiveImage {
		const { loading = 'lazy', fetchpriority = 'auto', quality = 80 } = options;

		// For now, use the original image until we have responsive versions
		return {
			srcset: `${basePath} ${width}w`,
			sizes: `(max-width: ${width}px) 100vw, ${width}px`,
			src: basePath,
			alt,
			width,
			height,
			loading,
			fetchpriority
		};
	}

	public getImageDimensions(path: string): Promise<{ width: number; height: number }> {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.onload = () => {
				resolve({
					width: img.width,
					height: img.height
				});
			};
			img.onerror = reject;
			img.src = path;
		});
	}
} 
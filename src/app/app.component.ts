import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { SeoService } from './core/services/seo.service';
import { filter } from 'rxjs/operators';

interface BreadcrumbItem {
	'@type': string;
	position: number;
	name: string;
	item: string;
}

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		CommonModule
	],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	readonly title = 'FUNDAMENTALLY';

	private meta = inject(Meta);
	private router = inject(Router);
	private seoService = inject(SeoService);

	public breadcrumbSchema = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		'itemListElement': [] as BreadcrumbItem[]
	};

	ngOnInit(): void {
		// Set CSP
		this.meta.updateTag({
			'http-equiv': 'Content-Security-Policy',
			content: environment.csp,
		});

		// Update metadata on route changes
		this.router.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe(() => {
				this.seoService.updateMetadataForCurrentRoute();
				this.updateBreadcrumbSchema();
			});

		// Set initial metadata
		this.seoService.updateMetadataForCurrentRoute();
	}

	log() {
		console.log(
			'%cSpirit. Crypto. Anarchy.',
			'color: white; font-size: 20px; font-weight: bold; text-shadow: 3px 3px 0px rgba(0,0,0,0.2);'
		);

		console.log(
			'%cMonero is freedom.',
			'color: #f26822; font-size: 16px; font-weight: bold;'
		);
	}

	private updateBreadcrumbSchema() {
		const path = this.router.url;
		const segments = path.split('/').filter(segment => segment);
		
		this.breadcrumbSchema.itemListElement = segments.map((segment, index) => {
			const url = '/' + segments.slice(0, index + 1).join('/');
			let name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
			
			// Special cases for specific routes
			switch(segment) {
				case 'purchase-options':
					name = 'Purchase Options';
					break;
				case 'terms-and-conditions':
					name = 'Terms & Conditions';
					break;
				case 'privacy-policy':
					name = 'Privacy Policy';
					break;
			}

			return {
				'@type': 'ListItem',
				'position': index + 2, // +2 because we'll add home as position 1
				'name': name,
				'item': `https://www.fundamentally.xyz${url}`
			} as BreadcrumbItem;
		});

		// Always add home as first item
		this.breadcrumbSchema.itemListElement.unshift({
			'@type': 'ListItem',
			'position': 1,
			'name': 'Home',
			'item': 'https://www.fundamentally.xyz'
		} as BreadcrumbItem);
	}
}

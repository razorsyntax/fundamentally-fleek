import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface PageMetadata {
	title: string;
	description: string;
	keywords: string;
	ogTitle?: string;
	ogDescription?: string;
	ogImage?: string;
	twitterTitle?: string;
	twitterDescription?: string;
	twitterImage?: string;
	canonicalUrl?: string;
}

@Injectable({
	providedIn: 'root'
})
export class SeoService {
	private meta = inject(Meta);
	private title = inject(Title);
	private router = inject(Router);

	private readonly baseUrl = 'https://www.fundamentally.xyz';

	private readonly pageMetadata: Record<string, PageMetadata> = {
		'': {
			title: 'Fundamentally | Professional Crypto Investment Platform',
			description: 'Professional crypto investment research and portfolio management platform. Access AI-enhanced analysis, portfolio tracking, and comprehensive market insights.',
			keywords: 'crypto investment, portfolio management, cryptocurrency analysis, crypto research, investment platform, crypto portfolio, market analysis',
			ogTitle: 'Fundamentally - Professional Crypto Investment Platform',
			ogDescription: 'Transform your crypto investment strategy with professional-grade tools and AI-enhanced analysis.',
			ogImage: `${this.baseUrl}/assets/images/og-image.jpg`,
			twitterTitle: 'Fundamentally - Professional Crypto Investment Platform',
			twitterDescription: 'Transform your crypto investment strategy with professional-grade tools and AI-enhanced analysis.',
			twitterImage: `${this.baseUrl}/assets/images/twitter-image.jpg`,
			canonicalUrl: this.baseUrl
		},
		'home': {
			title: 'Fundamentally | Professional Crypto Investment Platform',
			description: 'Professional crypto investment research and portfolio management platform. Access AI-enhanced analysis, portfolio tracking, and comprehensive market insights.',
			keywords: 'crypto investment, portfolio management, cryptocurrency analysis, crypto research, investment platform, crypto portfolio, market analysis',
			ogTitle: 'Fundamentally - Professional Crypto Investment Platform',
			ogDescription: 'Transform your crypto investment strategy with professional-grade tools and AI-enhanced analysis.',
			ogImage: `${this.baseUrl}/assets/images/og-image.jpg`,
			twitterTitle: 'Fundamentally - Professional Crypto Investment Platform',
			twitterDescription: 'Transform your crypto investment strategy with professional-grade tools and AI-enhanced analysis.',
			twitterImage: `${this.baseUrl}/assets/images/twitter-image.jpg`,
			canonicalUrl: `${this.baseUrl}/home`
		},
		'purchase-options': {
			title: 'Purchase Options - Fundamentally | Professional Crypto Investment Platform',
			description: 'Choose your Fundamentally subscription plan. Access professional crypto investment tools, portfolio management, and AI-enhanced analysis. Monthly and annual plans available with cryptocurrency payment options.',
			keywords: 'crypto subscription, investment platform pricing, crypto investment tools, portfolio management subscription, cryptocurrency payment, crypto analysis tools',
			ogTitle: 'Choose Your Fundamentally Subscription Plan',
			ogDescription: 'Access professional crypto investment tools with flexible subscription options. Monthly and annual plans available.',
			ogImage: `${this.baseUrl}/assets/images/purchase-options-og.jpg`,
			twitterTitle: 'Choose Your Fundamentally Subscription Plan',
			twitterDescription: 'Access professional crypto investment tools with flexible subscription options. Monthly and annual plans available.',
			twitterImage: `${this.baseUrl}/assets/images/purchase-options-twitter.jpg`,
			canonicalUrl: `${this.baseUrl}/purchase-options`
		},
		'privacy-policy': {
			title: 'Privacy Policy - Fundamentally',
			description: 'Fundamentally privacy policy. Learn how we protect your data and maintain your privacy while using our crypto investment platform.',
			keywords: 'crypto privacy policy, data protection, cryptocurrency privacy, investment platform privacy, user data protection',
			ogTitle: 'Fundamentally Privacy Policy',
			ogDescription: 'Learn how we protect your data and maintain your privacy while using our crypto investment platform.',
			ogImage: `${this.baseUrl}/assets/images/privacy-og.jpg`,
			twitterTitle: 'Fundamentally Privacy Policy',
			twitterDescription: 'Learn how we protect your data and maintain your privacy while using our crypto investment platform.',
			twitterImage: `${this.baseUrl}/assets/images/privacy-twitter.jpg`,
			canonicalUrl: `${this.baseUrl}/privacy-policy`
		},
		'terms-and-conditions': {
			title: 'Terms and Conditions - Fundamentally',
			description: 'Fundamentally terms and conditions. Understand the terms of use for our crypto investment platform and services.',
			keywords: 'crypto terms and conditions, investment platform terms, cryptocurrency terms, service agreement, platform usage terms',
			ogTitle: 'Fundamentally Terms and Conditions',
			ogDescription: 'Understand the terms of use for our crypto investment platform and services.',
			ogImage: `${this.baseUrl}/assets/images/terms-og.jpg`,
			twitterTitle: 'Fundamentally Terms and Conditions',
			twitterDescription: 'Understand the terms of use for our crypto investment platform and services.',
			twitterImage: `${this.baseUrl}/assets/images/terms-twitter.jpg`,
			canonicalUrl: `${this.baseUrl}/terms-and-conditions`
		},
		'refunds': {
			title: 'Refund Policy - Fundamentally',
			description: 'Fundamentally refund policy. Learn about our refund terms and conditions for subscription services.',
			keywords: 'crypto refund policy, subscription refunds, investment platform refunds, cryptocurrency refunds, service refund policy',
			ogTitle: 'Fundamentally Refund Policy',
			ogDescription: 'Learn about our refund terms and conditions for subscription services.',
			ogImage: `${this.baseUrl}/assets/images/refunds-og.jpg`,
			twitterTitle: 'Fundamentally Refund Policy',
			twitterDescription: 'Learn about our refund terms and conditions for subscription services.',
			twitterImage: `${this.baseUrl}/assets/images/refunds-twitter.jpg`,
			canonicalUrl: `${this.baseUrl}/refunds`
		},
		'error': {
			title: 'Error - Fundamentally',
			description: 'An error occurred while accessing Fundamentally. Please try again or contact support.',
			keywords: 'crypto platform error, investment platform error, service error, technical support',
			ogTitle: 'Error - Fundamentally',
			ogDescription: 'An error occurred while accessing Fundamentally. Please try again or contact support.',
			canonicalUrl: `${this.baseUrl}/error`
		},
		'404': {
			title: 'Page Not Found - Fundamentally',
			description: 'The requested page could not be found on Fundamentally. Please check the URL or return to the homepage.',
			keywords: 'page not found, 404 error, crypto platform, investment platform',
			ogTitle: 'Page Not Found - Fundamentally',
			ogDescription: 'The requested page could not be found on Fundamentally. Please check the URL or return to the homepage.',
			canonicalUrl: `${this.baseUrl}/404`
		}
	};

	public updateMetadataForCurrentRoute(): void {
		const route = this.router.url.slice(1); // Remove leading slash
		this.updateMetadata(route);
	}

	private updateMetadata(route: string): void {
		const metadata = this.pageMetadata[route] || this.pageMetadata['404'];

		// Update title
		this.title.setTitle(metadata.title);

		// Update meta tags
		this.meta.updateTag({ name: 'description', content: metadata.description });
		this.meta.updateTag({ name: 'keywords', content: metadata.keywords });

		// Update Open Graph tags
		if (metadata.ogTitle) {
			this.meta.updateTag({ property: 'og:title', content: metadata.ogTitle });
		}
		if (metadata.ogDescription) {
			this.meta.updateTag({ property: 'og:description', content: metadata.ogDescription });
		}
		if (metadata.ogImage) {
			this.meta.updateTag({ property: 'og:image', content: metadata.ogImage });
		}
		this.meta.updateTag({ property: 'og:url', content: metadata.canonicalUrl || `${this.baseUrl}/${route}` });
		this.meta.updateTag({ property: 'og:type', content: 'website' });

		// Update Twitter Card tags
		if (metadata.twitterTitle) {
			this.meta.updateTag({ name: 'twitter:title', content: metadata.twitterTitle });
		}
		if (metadata.twitterDescription) {
			this.meta.updateTag({ name: 'twitter:description', content: metadata.twitterDescription });
		}
		if (metadata.twitterImage) {
			this.meta.updateTag({ name: 'twitter:image', content: metadata.twitterImage });
		}
		this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

		// Update canonical URL
		if (metadata.canonicalUrl) {
			this.meta.updateTag({ rel: 'canonical', href: metadata.canonicalUrl });
		}
	}
} 
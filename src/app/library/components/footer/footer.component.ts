import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OptimizedImageComponent } from '../../../shared/components/optimized-image/optimized-image.component';

enum SocialPlatform {
  X = 'x',
  TELEGRAM = 'telegram',
  YOUTUBE = 'youtube',
  LINKEDIN = 'linkedin',
  TIKTOK = 'tiktok'
}

enum LinkType {
  INTERNAL = 'internal',
  EXTERNAL = 'external'
}

interface SocialLink {
  platform: SocialPlatform;
  url: string;
  icon: string;
}

interface FooterLink {
  text: string;
  type: LinkType;
  route?: string;
  url?: string;
}

interface SpecificLinks {
  nowPayments: FooterLink;
  monero: FooterLink;
  gust: FooterLink;
  company: FooterLink;
  zano: FooterLink;
  beam: FooterLink;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [CommonModule, RouterLink, OptimizedImageComponent],
})
export class FooterComponent {
  readonly SocialPlatform = SocialPlatform;
  readonly LinkType = LinkType;

  readonly socialLinks: SocialLink[] = [
    { platform: SocialPlatform.X, url: 'https://x.com/fundamentally_x', icon: 'lni-x' },
    { platform: SocialPlatform.TELEGRAM, url: 'https://t.me/+oynN_BHWKHw3YTAx', icon: 'lni-telegram' },
    { platform: SocialPlatform.YOUTUBE, url: 'https://www.youtube.com/@fundamentallycrypto', icon: 'lni-youtube' },
    { platform: SocialPlatform.LINKEDIN, url: 'https://www.linkedin.com/company/fundamentally-crypto/', icon: 'lni-linkedin' },
    { platform: SocialPlatform.TIKTOK, url: 'https://www.tiktok.com/@fundamentally7', icon: 'lni-tiktok' },
  ];

  readonly footerLinks: FooterLink[] = [
    { text: 'Privacy Policy', type: LinkType.INTERNAL, route: '/privacy-policy' },
    { text: 'Terms and Conditions', type: LinkType.INTERNAL, route: '/terms-and-conditions' },
    { text: 'Refund Policy', type: LinkType.INTERNAL, route: '/refunds' },
  ];

  readonly specificLinks: SpecificLinks = {
    nowPayments: { text: 'NOWPayments', type: LinkType.EXTERNAL, url: 'https://nowpayments.io/' },
    monero: { text: 'Monero', type: LinkType.EXTERNAL, url: 'https://getmonero.org/' },
    gust: { text: 'As seen on the investment platform Gust', type: LinkType.EXTERNAL, url: 'https://gust.com/companies/fundamentally-crypto' },
    company: { text: 'The Aquarian, LLC', type: LinkType.EXTERNAL, url: 'https://www.aquarianmetals.com/' },
    zano: { text: 'Zano', type: LinkType.EXTERNAL, url: 'https://zano.org/' },
    beam: { text: 'Beam', type: LinkType.EXTERNAL, url: 'https://beam.mw/' },
  };

  readonly currentYear = new Date().getFullYear();
}

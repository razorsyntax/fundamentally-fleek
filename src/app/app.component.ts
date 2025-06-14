import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
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
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Fundamentally';
  public breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [] as BreadcrumbItem[]
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.log();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateBreadcrumbSchema();
    });
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
        'position': index + 1,
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

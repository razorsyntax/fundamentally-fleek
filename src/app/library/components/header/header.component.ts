import { CommonModule, ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [
        CommonModule,
        RouterModule
    ],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
    isNavbarVisible = true;

    constructor(
        private route: ActivatedRoute,
        private viewportScroller: ViewportScroller
    ) {}

    ngOnInit() {
        this.route.fragment.subscribe(() => {
            this.scrollToFragment();
        });
    }

    onLinkClick(event: Event, fragment: string) {
        event.preventDefault();
        this.viewportScroller.scrollToAnchor(fragment);
        this.closeNavbar();
    }

    private scrollToFragment() {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
            this.viewportScroller.scrollToAnchor(fragment);
        } else {
            this.viewportScroller.scrollToPosition([0, 0]);
        }
    }

    closeNavbar() {
        this.isNavbarVisible = false;
    }

    toggleNavbar() {
        this.isNavbarVisible = !this.isNavbarVisible;
    }
}

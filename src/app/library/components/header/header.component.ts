import { CommonModule, ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ScreenSizeService } from 'src/app/screen-size.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  isNavbarVisible = false;
  isMobileScreen: boolean = false;
  private screenSizeSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private screenSizeService: ScreenSizeService
  ) {}

  ngOnInit() {
    this.isMobileScreen = this.screenSizeService.isMobileScreen;
    if(!this.isMobileScreen) {
      this.isNavbarVisible = true;
    }
    this.screenSizeSubscription = this.screenSizeService.isMobileScreenChange.subscribe((isMobileScreen) => {
      this.isMobileScreen = isMobileScreen;
      if(!this.isMobileScreen) {
        this.isNavbarVisible = true;
      }

    });
    this.route.fragment.subscribe(() => {
      this.scrollToFragment();
    });
  }

  ngOnDestroy() {
    this.screenSizeSubscription.unsubscribe();
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
    console.log('toggleNavbar called');
    this.isNavbarVisible = !this.isNavbarVisible;
    console.log('isNavbarVisible:', this.isNavbarVisible);
  }
}

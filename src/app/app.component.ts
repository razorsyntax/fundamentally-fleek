import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterModule]
})
export class AppComponent {
  title = 'Fundamentally';

  ngOnInit(): void {
    this.log();
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
}

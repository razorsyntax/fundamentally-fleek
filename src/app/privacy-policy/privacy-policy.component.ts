import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../library/components/header/header.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-privacy-policy',
    imports: [CommonModule, RouterLink, HeaderComponent],
    templateUrl: './privacy-policy.component.html',
    styleUrls: ['./privacy-policy.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyPolicyComponent {}

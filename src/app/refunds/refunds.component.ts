import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../library/components/header/header.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-refunds',
    imports: [CommonModule, RouterLink, HeaderComponent],
    templateUrl: './refunds.component.html',
    styleUrls: ['./refunds.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefundsComponent {}

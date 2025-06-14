import { Injectable, ErrorHandler, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
	private router = inject(Router);

	handleError(error: Error): void {
		console.error('An error occurred:', error);
		
		// Don't redirect for 404s as they're handled by the router
		if (error.message?.includes('Cannot match any routes')) {
			return;
		}

		// Redirect to error page
		this.router.navigate(['/error']);
	}
} 
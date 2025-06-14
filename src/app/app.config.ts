import { ApplicationConfig, ErrorHandler, isDevMode, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ErrorHandlerService } from './core/services/error-handler.service';

import { routes } from './app.routes';

const serviceWorkerProvider: Provider = {
	provide: 'SERVICE_WORKER',
	useFactory: () => {
		if (isDevMode()) {
			return null;
		}
		// @ts-ignore
		return import('@angular/service-worker').then(({ provideServiceWorker }) => 
			provideServiceWorker('ngsw-worker.js', { 
				enabled: true, 
				registrationStrategy: 'registerWhenStable:30000' 
			})
		);
	}
};

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideClientHydration(),
		provideHttpClient(withFetch()),
		provideAnimations(),
		{ provide: ErrorHandler, useClass: ErrorHandlerService },
		serviceWorkerProvider
	]
};

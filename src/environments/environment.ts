// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

interface Environment {
	production: boolean;
	csp: string;
}

export const environment: Environment = {
	production: false,
	csp: `default-src 'self';
		connect-src 'self' http://localhost:3000 http://localhost:4200 ws: wss: blob:
			https://ws-us3.pusher.com https://docs.google.com
			https://fonts.googleapis.com https://fonts.gstatic.com
			https://o160250.ingest.sentry.io;
		script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:
			https://hcaptcha.com https://*.hcaptcha.com;
		frame-src 'self' blob: data:
			https://hcaptcha.com https://*.hcaptcha.com
			https://docs.google.com;
		style-src 'self' 'unsafe-inline'
			https://fonts.googleapis.com;
		font-src 'self' https://fonts.gstatic.com http://fonts.gstatic.com data:;
		img-src 'self' data: blob: https:;
		object-src 'self';
		media-src 'self';
		child-src 'self';
		worker-src 'self' blob:`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
